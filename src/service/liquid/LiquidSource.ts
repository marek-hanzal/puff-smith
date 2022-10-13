import {Container}       from "@/puff-smith/service/Container";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	ILiquidEntity,
	ILiquidSource
}                        from "@/puff-smith/service/liquid/interface";
import {
	ClientError,
	IWithIdentity,
	merge,
	pageOf,
	SourceInfer,
	UndefinableOptional,
	withFetch
}                        from "@leight-core/viv";

export class LiquidSourceClass extends ContainerSource<ILiquidSource> implements ILiquidSource {
	constructor() {
		super("liquid");
	}

	async toItem(liquid: SourceInfer.Entity<ILiquidSource>): Promise<SourceInfer.Item<ILiquidSource>> {
		return this.container.useTagSource(async tagSource => {
			return this.container.useAromaSource(aromaSource => {
				return this.container.useMixtureSource(async mixtureSource => {
					return {
						...liquid,
						aroma:    await aromaSource.mapper.toItem.map(liquid.aroma),
						created:  liquid.created.toUTCString(),
						mixed:    liquid.mixed.toUTCString(),
						nicotine: liquid.nicotine?.toNumber(),
						mixture:  await mixtureSource.get(liquid.mixtureId),
						draws:    await tagSource.mapper.toItem.list(Promise.resolve(liquid.LiquidDraw.map(({draw}) => draw))),
						drawIds:  liquid.LiquidDraw.map(({draw}) => draw.id),
					};
				});
			});
		});
	}

	async updateKeywords(liquid: ILiquidEntity): Promise<ILiquidEntity> {
		return liquid;
		// return this.container.useKeywordSource(async keywordSource => {
		// const $liquid = await this.map(liquid);
		// const source: string[] = [
		// 	$liquid.code,
		// 	$liquid.vendor.name,
		// 	$liquid.name,
		// 	...$liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// ];
		// (await this.container.prisma.translation.findMany({
		// 	where: {
		// 		label: {
		// 			in: $liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// 		},
		// 	}
		// })).map(({text}) => source.push(text));
		// await this.container.prisma.liquidKeyword.deleteMany({
		// 	where: {liquidId: liquid.id},
		// });
		// await this.container.prisma.liquidKeyword.createMany({
		// 	data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
		// 		liquidId: liquid.id,
		// 		keywordId: (await keyword).id,
		// 	}))),
		// });
		// return liquid;
		// });
	}

	async $create({mixtureId, mixed, ...liquid}: SourceInfer.Create<ILiquidSource>): Promise<SourceInfer.Entity<ILiquidSource>> {
		return this.container.useCodeService(codeService => {
			return this.container.useMixtureSource(async mixtureSource => {
				const mixture = await mixtureSource.get(mixtureId);
				if (mixture.result.error) {
					throw new ClientError(`Resolved invalid mixture [${mixture.result.error}]!`);
				}
				return this.updateKeywords(await this.container.prisma.liquid.create({
					data:    {
						...liquid,
						code:            codeService.code(),
						nicotine:        mixture.result.nicotine,
						nicotineToRound: mixture.result.nicotineToRound,
						vg:              mixture.result.ratio.vg,
						vgToRound:       mixture.result.round.vg,
						pg:              mixture.result.ratio.pg,
						pgToRound:       mixture.result.round.pg,
						boosterAmount:   mixture.booster?.volume,
						boosterCount:    mixture.booster?.count,
						baseAmount:      mixture.base?.volume,
						mixtureId,
						userId:          this.container.user.required(),
						created:         new Date(),
						mixed:           mixed || new Date(),
					},
					include: {
						aroma:      {
							include: {
								vendor:     true,
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

	async $patch({id, mixtureId, ...liquid}: UndefinableOptional<SourceInfer.Create<ILiquidSource>> & IWithIdentity): Promise<SourceInfer.Entity<ILiquidSource>> {
		return this.container.useTagSource(async tagSource => {
			return this.container.useMixtureSource(async mixtureSource => {
				const mixture = mixtureId ? await mixtureSource.get(mixtureId) : undefined;
				if (mixture && mixture.result.error) {
					throw new ClientError(`Resolved invalid mixture [${mixture.result.error}]!`);
				}
				return this.updateKeywords(await this.container.prisma.liquid.update({
					where:   {id},
					data:    {
						...liquid,
						nicotine:        mixture?.result?.nicotine,
						nicotineToRound: mixture?.result?.nicotineToRound,
						vg:              mixture?.result.ratio.vg,
						vgToRound:       mixture?.result.round.vg,
						pg:              mixture?.result.ratio.pg,
						pgToRound:       mixture?.result.round.pg,
						boosterAmount:   mixture?.booster?.volume,
						boosterCount:    mixture?.booster?.count,
						baseAmount:      mixture?.base?.volume,
						mixtureId,
						LiquidDraw:      {
							createMany: {
								data: mixture?.result?.draws ? (await tagSource.fetchByTags(mixture?.result?.draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : []
							},
						},
					},
					include: {
						aroma:      {
							include: {
								vendor:     true,
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

	// async toImport(entity: SourceInfer.Entity<ILiquidSource>): Promise<SourceInfer.Create<ILiquidSource> | undefined> {
	// 	return {
	// 		mixtureId: entity.mixtureId,
	// 		mixed: entity.mixed,
	// 		code: entity.code,
	// 		vendorId: entity.vendorId,
	// 	};
	// }

	async resolveId({code}: SourceInfer.Create<ILiquidSource>): Promise<IWithIdentity> {
		return this.container.prisma.liquid.findFirstOrThrow({
			select: {
				id: true,
			},
			where:  {
				code,
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<ILiquidSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.liquid.findMany({
			where,
			include: {
				aroma:      {
					include: {
						vendor:     true,
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
		await this.container.prisma.liquid.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<SourceInfer.Entity<ILiquidSource>> {
		return this.container.prisma.liquid.findUniqueOrThrow({
			where:   {
				id,
			},
			include: {
				aroma:      {
					include: {
						vendor:     true,
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

	async $query(query: SourceInfer.Query<ILiquidSource>): Promise<SourceInfer.Entity<ILiquidSource>[]> {
		return this.container.prisma.liquid.findMany({
			where: this.withFilter(query),
			...pageOf(query),
			include: {
				aroma:      {
					include: {
						vendor:     true,
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

	async $count(query: SourceInfer.Query<ILiquidSource>): Promise<number> {
		return this.container.prisma.liquid.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<ILiquidSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				LiquidKeyword: {
					some: {
						keyword: {
							text: {
								contains: fragment,
								mode:     "insensitive",
							},
						},
					},
				}
			})),
		});
	}
}

export const LiquidSource     = () => new LiquidSourceClass();
export const nextLiquidSource = () => withFetch(async () => Container().useLiquidSource(async t => t), "liquid", "liquidId");
