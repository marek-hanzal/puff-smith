import {
	IAromaEntity,
	IAromaSource
}                        from "@/puff-smith/service/aroma/interface";
import {Container}       from "@/puff-smith/service/Container";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	IWithIdentity,
	merge,
	pageOf,
	SourceInfer,
	UndefinableOptional,
	withFetch
}                        from "@leight-core/viv";

export class AromaSourceClass extends ContainerSource<IAromaSource> implements IAromaSource {
	constructor() {
		super("aroma");
	}

	async toItem(aroma: SourceInfer.Entity<IAromaSource>): Promise<SourceInfer.Item<IAromaSource>> {
		return this.container.useVendorSource(async vendorSource => {
			return this.container.useTagSource(async tagSource => {
				return {
					...aroma,
					vendor:   await vendorSource.mapper.toItem.map(aroma.vendor),
					tastes:   await tagSource.mapper.toItem.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
					tasteIds: aroma.AromaTaste.map(({taste}) => taste.id),
				};
			});
		});
	}

	async updateKeywords(aroma: IAromaEntity): Promise<IAromaEntity> {
		return this.container.useKeywordSource(async keywordSource => {
			const $aroma           = await this.toItem(aroma);
			const source: string[] = [
				$aroma.code,
				$aroma.vendor.name,
				$aroma.name,
				...$aroma.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			];
			(await this.container.prisma.translation.findMany({
				where: {
					label: {
						in: $aroma.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
					},
				}
			})).map(({text}) => source.push(text));
			await this.container.prisma.aromaKeyword.deleteMany({
				where: {aromaId: aroma.id},
			});
			await this.container.prisma.aromaKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					aromaId:   aroma.id,
					keywordId: (await keyword).id,
				}))),
			});
			return aroma;
		});
	}

	async $create({vendor, vendorId, tastes, tasteIds, code, nicotine, userId, ...aroma}: SourceInfer.Create<IAromaSource>): Promise<SourceInfer.Entity<IAromaSource>> {
		return this.container.useTagSource(async tagSource => {
			return this.container.useCodeService(async codeService => {
				return this.updateKeywords(await this.container.prisma.aroma.create({
					data: {
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
						user:       (userId || this.container.user.optional()) ? {
							connect: {
								id: userId || this.container.user.optional(),
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

	async $patch({vendor, vendorId, tastes, tasteIds, id, name, userId, ...patch}: UndefinableOptional<SourceInfer.Create<IAromaSource>> & IWithIdentity): Promise<SourceInfer.Entity<IAromaSource>> {
		return this.container.useTagSource(async tagSource => {
			await this.container.prisma.aromaTaste.deleteMany({
				where: {aromaId: id}
			});
			return this.updateKeywords(await this.container.prisma.aroma.update({
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
					user:       (userId || this.container.user.optional()) ? {
						connect: {
							id: userId || this.container.user.optional(),
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

	async resolveId({vendor, vendorId, name, code}: SourceInfer.Create<IAromaSource>): Promise<IWithIdentity> {
		return this.container.prisma.aroma.findFirstOrThrow({
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

	async restore(backup?: SourceInfer.Backup<IAromaSource>): Promise<SourceInfer.Entity<IAromaSource> | undefined> {
		if (!backup) {
			return;
		}


		console.log("Restoring from", backup);
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IAromaSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.aroma.findMany({
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
		await this.container.prisma.aroma.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IAromaSource>> {
		return this.container.prisma.aroma.findUniqueOrThrow({
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

	async $query(query: SourceInfer.Query<IAromaSource>): Promise<SourceInfer.Entity<IAromaSource>[]> {
		return this.container.prisma.aroma.findMany({
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

	async $count(query: SourceInfer.Query<IAromaSource>): Promise<number> {
		return this.container.prisma.aroma.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<IAromaSource>) {
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

export const AromaSource     = () => new AromaSourceClass();
export const nextAromaSource = () => withFetch(async () => Container().useAromaSource(async t => t), "aroma", "aromaId");
