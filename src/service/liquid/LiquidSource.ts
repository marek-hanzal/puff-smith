import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {ILiquidEntity, ILiquidSource} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ClientError, ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const LiquidSource = () => new LiquidSourceClass();

export class LiquidSourceClass extends ContainerSource<ILiquidSource> implements ILiquidSource {
	constructor() {
		super("liquid", prisma);
	}

	async map(liquid: ISourceEntity<ILiquidSource>): Promise<ISourceItem<ILiquidSource>> {
		return this.useTagSource(async tagSource => {
			return this.useAromaSource(aromaSource => {
				return this.useMixtureSource(async mixtureSource => {
					return {
						...liquid,
						aroma: await aromaSource.map(liquid.aroma),
						created: liquid.created.toUTCString(),
						mixed: liquid.mixed.toUTCString(),
						nicotine: liquid.nicotine?.toNumber(),
						mixture: await mixtureSource.get(liquid.mixtureId),
						draws: await tagSource.list(Promise.resolve(liquid.LiquidDraw.map(({draw}) => draw))),
						drawIds: liquid.LiquidDraw.map(({draw}) => draw.id),
					};
				});
			});
		});
	}

	async updateKeywords(liquid: ILiquidEntity): Promise<ILiquidEntity> {
		return this.useKeywordSource(async keywordSource => {
			// const $liquid = await this.map(liquid);
			// const source: string[] = [
			// 	$liquid.code,
			// 	$liquid.vendor.name,
			// 	$liquid.name,
			// 	...$liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// ];
			// (await this.prisma.translation.findMany({
			// 	where: {
			// 		label: {
			// 			in: $liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// 		},
			// 	}
			// })).map(({text}) => source.push(text));
			// await this.prisma.liquidKeyword.deleteMany({
			// 	where: {liquidId: liquid.id},
			// });
			// await this.prisma.liquidKeyword.createMany({
			// 	data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
			// 		liquidId: liquid.id,
			// 		keywordId: (await keyword).id,
			// 	}))),
			// });
			return liquid;
		});
	}

	async $create({mixtureId, mixed, ...liquid}: ISourceCreate<ILiquidSource>): Promise<ISourceEntity<ILiquidSource>> {
		return this.useCodeService(codeService => {
			return this.useMixtureSource(async mixtureSource => {
				const mixture = await mixtureSource.get(mixtureId);
				if (mixture.result.error) {
					throw new ClientError(`Resolved invalid mixture [${mixture.result.error}]!`);
				}
				return this.updateKeywords(await this.prisma.liquid.create({
					data: {
						...liquid,
						code: codeService.code(),
						nicotine: mixture.result.nicotine,
						nicotineToRound: mixture.result.nicotineToRound,
						vg: mixture.result.ratio.vg,
						vgToRound: mixture.result.round.vg,
						pg: mixture.result.ratio.pg,
						pgToRound: mixture.result.round.pg,
						boosterAmount: mixture.booster?.volume,
						boosterCount: mixture.booster?.count,
						baseAmount: mixture.base?.volume,
						mixtureId,
						userId: this.user.required(),
						created: new Date(),
						mixed: mixed || new Date(),
					},
					include: {
						aroma: {
							include: {
								vendor: true,
								AromaTaste: {
									orderBy: {taste: {sort: "asc"}},
									include: {
										taste: true,
									},
								},
							},
						},
						LiquidDraw: {
							orderBy: {draw: {sort: "asc"}},
							include: {
								draw: true,
							}
						}
					},
				}));
			});
		});
	}

	async $patch({id, mixtureId, ...liquid}: UndefinableOptional<ISourceCreate<ILiquidSource>> & IWithIdentity): Promise<ISourceEntity<ILiquidSource>> {
		return this.useTagSource(async tagSource => {
			return this.useMixtureSource(async mixtureSource => {
				const mixture = mixtureId ? await mixtureSource.get(mixtureId) : undefined;
				if (mixture && mixture.result.error) {
					throw new ClientError(`Resolved invalid mixture [${mixture.result.error}]!`);
				}
				return this.updateKeywords(await this.prisma.liquid.update({
					where: {id},
					data: {
						...liquid,
						nicotine: mixture?.result?.nicotine,
						nicotineToRound: mixture?.result?.nicotineToRound,
						vg: mixture?.result.ratio.vg,
						vgToRound: mixture?.result.round.vg,
						pg: mixture?.result.ratio.pg,
						pgToRound: mixture?.result.round.pg,
						boosterAmount: mixture?.booster?.volume,
						boosterCount: mixture?.booster?.count,
						baseAmount: mixture?.base?.volume,
						mixtureId,
						LiquidDraw: {
							createMany: {
								data: mixture?.result?.draws ? (await tagSource.fetchByTags(mixture?.result?.draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : []
							},
						},
					},
					include: {
						aroma: {
							include: {
								vendor: true,
								AromaTaste: {
									orderBy: {taste: {sort: "asc"}},
									include: {
										taste: true,
									},
								},
							},
						},
						LiquidDraw: {
							orderBy: {draw: {sort: "asc"}},
							include: {
								draw: true,
							}
						}
					},
				}));
			});
		});
	}

	async createToId({code}: ISourceCreate<ILiquidSource>): Promise<{ id: string }> {
		return this.prisma.liquid.findFirstOrThrow({
			select: {
				id: true,
			},
			where: {
				code,
			},
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<ILiquidSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.liquid.findMany({
			where,
			include: {
				aroma: {
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							},
						},
					},
				},
				LiquidDraw: {
					orderBy: {draw: {sort: "asc"}},
					include: {
						draw: true,
					}
				}
			},
		});
		await this.prisma.liquid.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<ISourceEntity<ILiquidSource>> {
		return this.prisma.liquid.findUniqueOrThrow({
			where: {
				id,
			},
			include: {
				aroma: {
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							},
						},
					},
				},
				LiquidDraw: {
					orderBy: {draw: {sort: "asc"}},
					include: {
						draw: true,
					}
				}
			},
		});
	}

	async $query(query: ISourceQuery<ILiquidSource>): Promise<ISourceEntity<ILiquidSource>[]> {
		return this.prisma.liquid.findMany({
			where: this.withFilter(query),
			...pageOf(query),
			include: {
				aroma: {
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							},
						},
					},
				},
				LiquidDraw: {
					orderBy: {draw: {sort: "asc"}},
					include: {
						draw: true,
					}
				}
			},
		});
	}

	async $count(query: ISourceQuery<ILiquidSource>): Promise<number> {
		return this.prisma.liquid.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<ILiquidSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				LiquidKeyword: {
					some: {
						keyword: {
							text: {
								contains: fragment,
								mode: "insensitive",
							},
						},
					},
				}
			})),
		});
	}
}
