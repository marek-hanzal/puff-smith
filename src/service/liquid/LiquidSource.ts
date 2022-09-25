import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {ILiquidEntity, ILiquidSource} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {merge} from "@leight-core/utils";

export const LiquidSource = () => new LiquidSourceClass();

export class LiquidSourceClass extends ContainerSource<ILiquidSource> implements ILiquidSource {
	constructor() {
		super("liquid", prisma);
	}

	async map(liquid: ISourceEntity<ILiquidSource>): Promise<ISourceItem<ILiquidSource>> {
		return this.useVendorSource(async vendorSource => {
			return this.useTagSource(async tagSource => {
				return {
					...liquid,
					vendor: await vendorSource.map(liquid.vendor),
					tastes: await tagSource.list(Promise.resolve(liquid.LiquidTaste.map(({taste}) => taste))),
					tasteIds: liquid.LiquidTaste.map(({taste}) => taste.id),
				};
			});
		});
	}

	async updateKeywords(liquid: ILiquidEntity): Promise<ILiquidEntity> {
		return this.useKeywordSource(async keywordSource => {
			const $liquid = await this.map(liquid);
			const source: string[] = [
				$liquid.code,
				$liquid.vendor.name,
				$liquid.name,
				...$liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			];
			(await this.prisma.translation.findMany({
				where: {
					label: {
						in: $liquid.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
					},
				}
			})).map(({text}) => source.push(text));
			await this.prisma.liquidKeyword.deleteMany({
				where: {liquidId: liquid.id},
			});
			await this.prisma.liquidKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					liquidId: liquid.id,
					keywordId: (await keyword).id,
				}))),
			});
			return liquid;
		});
	}

	async $create({vendor, vendorId, tastes, tasteIds, code, ...liquid}: ISourceCreate<ILiquidSource>): Promise<ISourceEntity<ILiquidSource>> {
		throw new Error("not yet");
		// return this.useTagSource(async tagSource => {
		// 	return this.useCodeService(async codeService => {
		// 		return this.updateKeywords(await this.prisma.liquid.create({
		// 			data: {
		// 				...liquid,
		// 				nicotine: nicotine || 0,
		// 				code: code || codeService.code(),
		// 				name: `${liquid.name}`,
		// 				vendor: {
		// 					connect: {
		// 						name: vendor,
		// 						id: vendorId,
		// 					}
		// 				},
		// 				LiquidTaste: {
		// 					createMany: {
		// 						data: (await tagSource.fetchByTags(tasteIds || tastes, "taste")).map(tag => ({
		// 							tasteId: tag.id,
		// 						})),
		// 					}
		// 				},
		// 				user: this.user.optional() ? {
		// 					connect: {
		// 						id: this.user.optional(),
		// 					}
		// 				} : undefined,
		// 			},
		// 			include: {
		// 				vendor: true,
		// 				LiquidTaste: {
		// 					orderBy: {taste: {sort: "asc"}},
		// 					include: {
		// 						taste: true,
		// 					}
		// 				}
		// 			},
		// 		}));
		// 	});
		// });
	}

	async $patch({vendor, vendorId, tastes, tasteIds, id, name, ...patch}: UndefinableOptional<ISourceCreate<ILiquidSource>> & IWithIdentity): Promise<ISourceEntity<ILiquidSource>> {
		throw new Error("not yet");
		// return this.useTagSource(async tagSource => {
		// 	await this.prisma.liquidTaste.deleteMany({
		// 		where: {liquidId: id}
		// 	});
		// 	return this.updateKeywords(await this.prisma.liquid.update({
		// 		where: {id},
		// 		data: {
		// 			...patch,
		// 			name: `${name}`,
		// 			vendor: {
		// 				connect: {
		// 					name: vendor,
		// 					id: vendorId,
		// 				}
		// 			},
		// 			LiquidTaste: {
		// 				createMany: {
		// 					data: (await tagSource.fetchByTags(tasteIds || tastes, "taste")).map(tag => ({
		// 						tasteId: tag.id,
		// 					})),
		// 				}
		// 			},
		// 		},
		// 		include: {
		// 			vendor: true,
		// 			LiquidTaste: {
		// 				orderBy: {taste: {sort: "asc"}},
		// 				include: {
		// 					taste: true,
		// 				}
		// 			}
		// 		},
		// 	}));
		// });
	}

	async createToId({vendor, vendorId, name, code}: ISourceCreate<ILiquidSource>): Promise<{ id: string }> {
		return this.prisma.liquid.findFirstOrThrow({
			select: {
				id: true,
			},
			where: {
				OR: [
					{
						name: `${name}`,
						vendor: {
							name: vendor,
						}
					},
					{
						name: `${name}`,
						vendor: {
							id: vendorId,
						}
					},
					{
						code,
					}
				],
			},
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<ILiquidSource>[]> {
		throw new Error("not yet");
		// const where = {
		// 	id: {
		// 		in: ids,
		// 	},
		// };
		// const items = await this.prisma.liquid.findMany({
		// 	where,
		// 	include: {
		// 		vendor: true,
		// 		LiquidTaste: {
		// 			orderBy: {taste: {sort: "asc"}},
		// 			include: {
		// 				taste: true,
		// 			}
		// 		}
		// 	},
		// });
		// await this.prisma.liquid.deleteMany({
		// 	where,
		// });
		// return items;
	}

	async $get(id: string): Promise<ISourceEntity<ILiquidSource>> {
		throw new Error("not yet");

		// return this.prisma.liquid.findUniqueOrThrow({
		// 	where: {
		// 		id,
		// 	},
		// 	include: {
		// 		vendor: true,
		// 		LiquidTaste: {
		// 			orderBy: {taste: {sort: "asc"}},
		// 			include: {
		// 				taste: true,
		// 			}
		// 		}
		// 	},
		// });
	}

	async $query(query: ISourceQuery<ILiquidSource>): Promise<ISourceEntity<ILiquidSource>[]> {
		throw new Error("not yet");
		// return this.prisma.liquid.findMany({
		// 	where: this.withFilter(query),
		// 	include: {
		// 		vendor: true,
		// 		LiquidTaste: {
		// 			orderBy: {taste: {sort: "asc"}},
		// 			include: {
		// 				taste: true,
		// 			}
		// 		}
		// 	},
		// 	...pageOf(query),
		// });
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
