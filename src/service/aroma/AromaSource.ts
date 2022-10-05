import {
	IAromaEntity,
	IAromaSource
}                        from "@/puff-smith/service/aroma/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {
	ISourceBackup,
	ISourceCreate,
	ISourceEntity,
	ISourceItem,
	ISourceQuery,
	IWithIdentity,
	UndefinableOptional
}                        from "@leight-core/api";
import {pageOf}          from "@leight-core/server";
import {merge}           from "@leight-core/utils";

export const AromaSource = () => new AromaSourceClass();

export class AromaSourceClass extends ContainerSource<IAromaSource> implements IAromaSource {
	constructor() {
		super("aroma", prisma);
	}

	async map(aroma: ISourceEntity<IAromaSource>): Promise<ISourceItem<IAromaSource>> {
		return this.container.useVendorSource(async vendorSource => {
			return this.container.useTagSource(async tagSource => {
				return {
					...aroma,
					vendor:   await vendorSource.map(aroma.vendor),
					tastes:   await tagSource.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
					tasteIds: aroma.AromaTaste.map(({taste}) => taste.id),
				};
			});
		});
	}

	async updateKeywords(aroma: IAromaEntity): Promise<IAromaEntity> {
		return this.container.useKeywordSource(async keywordSource => {
			const $aroma           = await this.map(aroma);
			const source: string[] = [
				$aroma.code,
				$aroma.vendor.name,
				$aroma.name,
				...$aroma.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			];
			(await this.prisma.translation.findMany({
				where: {
					label: {
						in: $aroma.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
					},
				}
			})).map(({text}) => source.push(text));
			await this.prisma.aromaKeyword.deleteMany({
				where: {aromaId: aroma.id},
			});
			await this.prisma.aromaKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					aromaId:   aroma.id,
					keywordId: (await keyword).id,
				}))),
			});
			return aroma;
		});
	}

	async $create({vendor, vendorId, tastes, tasteIds, code, nicotine, userId, ...aroma}: ISourceCreate<IAromaSource>): Promise<ISourceEntity<IAromaSource>> {
		return this.container.useTagSource(async tagSource => {
			return this.container.useCodeService(async codeService => {
				return this.updateKeywords(await this.prisma.aroma.create({
					data:    {
						...aroma,
						nicotine:   nicotine || 0,
						code:       code || codeService.code(),
						name:       `${aroma.name}`,
						vendor:     {
							connect: {
								name: vendor,
								id:   vendorId,
							}
						},
						AromaTaste: {
							createMany: {
								data: (await tagSource.fetchByTags(tasteIds || tastes, "taste")).map(tag => ({
									tasteId: tag.id,
								})),
							}
						},
						user:       (userId || this.user.optional()) ? {
							connect: {
								id: userId || this.user.optional(),
							}
						} : undefined,
					},
					include: {
						vendor:     true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							}
						}
					},
				}));
			});
		});
	}

	async $patch({vendor, vendorId, tastes, tasteIds, id, name, userId, ...patch}: UndefinableOptional<ISourceCreate<IAromaSource>> & IWithIdentity): Promise<ISourceEntity<IAromaSource>> {
		return this.container.useTagSource(async tagSource => {
			await this.prisma.aromaTaste.deleteMany({
				where: {aromaId: id}
			});
			return this.updateKeywords(await this.prisma.aroma.update({
				where:   {id},
				data:    {
					...patch,
					name:       `${name}`,
					vendor:     {
						connect: {
							name: vendor,
							id:   vendorId,
						}
					},
					user:       (userId || this.user.optional()) ? {
						connect: {
							id: userId || this.user.optional(),
						}
					} : undefined,
					AromaTaste: {
						createMany: {
							data: (await tagSource.fetchByTags(tasteIds || tastes, "taste")).map(tag => ({
								tasteId: tag.id,
							})),
						}
					},
				},
				include: {
					vendor:     true,
					AromaTaste: {
						orderBy: {taste: {sort: "asc"}},
						include: {
							taste: true,
						}
					}
				},
			}));
		});
	}

	async createToId({vendor, vendorId, name, code}: ISourceCreate<IAromaSource>): Promise<{ id: string }> {
		return this.prisma.aroma.findFirstOrThrow({
			select: {
				id: true,
			},
			where:  {
				OR: [
					{
						name:   `${name}`,
						vendor: {
							name: vendor,
						}
					},
					{
						name:   `${name}`,
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

	async restore(backup?: ISourceBackup<IAromaSource>): Promise<ISourceEntity<IAromaSource> | undefined> {
		return undefined;
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IAromaSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.aroma.findMany({
			where,
			include: {
				vendor:     true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
		});
		await this.prisma.aroma.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<ISourceEntity<IAromaSource>> {
		return this.prisma.aroma.findUniqueOrThrow({
			where:   {
				id,
			},
			include: {
				vendor:     true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
		});
	}

	async $query(query: ISourceQuery<IAromaSource>): Promise<ISourceEntity<IAromaSource>[]> {
		return this.prisma.aroma.findMany({
			where:   this.withFilter(query),
			include: {
				vendor:     true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
			...pageOf(query),
		});
	}

	async $count(query: ISourceQuery<IAromaSource>): Promise<number> {
		return this.prisma.aroma.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<IAromaSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				AromaKeyword: {
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
