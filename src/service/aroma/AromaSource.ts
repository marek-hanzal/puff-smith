import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, ITag, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const AromaSource = () => new AromaSourceClass();

export class AromaSourceClass extends ContainerSource<IAromaSource> implements IAromaSource {
	constructor() {
		super("aroma", prisma);
	}

	async map(aroma: ISourceEntity<IAromaSource>): Promise<ISourceItem<IAromaSource>> {
		return this.useVendorSource(async vendorSource => {
			return this.useTagSource(async tagSource => {
				return {
					...aroma,
					vendor: await vendorSource.map(aroma.vendor),
					tastes: await tagSource.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
					tasteIds: aroma.AromaTaste.map(({taste}) => taste.id),
				};
			});
		});
	}

	async generateKeywords(keywords: (string | undefined)[], tastes: ITag[]) {
		return this.useKeywordSource(async keywordSource => {
			const source: string[] = keywords.filter(i => i) as string[];
			source.push(...tastes.map(tag => `common.${tag.group}.${tag.tag}`));
			await Promise.all(tastes.map(async tag => {
				(await this.prisma.translation.findMany({
					where: {
						label: `common.${tag.group}.${tag.tag}`,
					}
				})).map(translation => {
					source.push(translation.text);
				});
			}));
			return source.map(text => keywordSource.import({text}));
		});
	}

	async $create({vendor, vendorId, tastes, tasteIds, code, ...aroma}: ISourceCreate<IAromaSource>): Promise<ISourceEntity<IAromaSource>> {
		return this.useTagSource(async tagSource => {
			return this.useCodeService(async codeService => {
				const $tastes = await tagSource.fetchByTags(tasteIds || tastes, "taste");
				const $keywords = await this.generateKeywords(
					[
						aroma.name,
					],
					$tastes,
				);
				return this.prisma.aroma.create({
					data: {
						...aroma,
						code: code || codeService.code(),
						name: `${aroma.name}`,
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							}
						},
						AromaTaste: {
							createMany: {
								data: $tastes.map(tag => ({
									tasteId: tag.id,
								})),
							}
						},
						AromaKeyword: {
							createMany: {
								data: (await Promise.all($keywords)).map(keyword => ({
									keywordId: keyword.id,
								})),
							},
						},
						user: this.user.optional() ? {
							connect: {
								id: this.user.optional(),
							}
						} : undefined,
					},
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							}
						}
					},
				});
			});
		});
	}

	async $patch({vendor, vendorId, tastes, tasteIds, id, name, ...patch}: UndefinableOptional<ISourceCreate<IAromaSource>> & IWithIdentity): Promise<ISourceEntity<IAromaSource>> {
		return this.useTagSource(async tagSource => {
			await this.prisma.aromaTaste.deleteMany({
				where: {aromaId: id}
			});
			await this.prisma.aromaKeyword.deleteMany({
				where: {aromaId: id},
			});
			const $tastes = await tagSource.fetchByTags(tasteIds || tastes, "taste");
			const $keywords = await this.generateKeywords(
				[
					patch.code,
					name,
				],
				$tastes,
			);
			return this.prisma.aroma.update({
				where: {id},
				data: {
					...patch,
					name: `${name}`,
					vendor: {
						connect: {
							name: vendor,
							id: vendorId,
						}
					},
					AromaTaste: {
						createMany: {
							data: (await tagSource.fetchByTags(tasteIds || tastes, "taste")).map(tag => ({
								tasteId: tag.id,
							})),
						}
					},
					AromaKeyword: {
						createMany: {
							data: (await Promise.all($keywords)).map(keyword => ({
								keywordId: keyword.id,
							})),
						},
					},
				},
				include: {
					vendor: true,
					AromaTaste: {
						orderBy: {taste: {sort: "asc"}},
						include: {
							taste: true,
						}
					}
				},
			});
		});
	}

	async createToId({vendor, vendorId, name, code}: ISourceCreate<IAromaSource>): Promise<{ id: string }> {
		return this.prisma.aroma.findFirstOrThrow({
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

	async $remove(ids: string[]): Promise<ISourceEntity<IAromaSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.aroma.findMany({
			where,
			include: {
				vendor: true,
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
			where: {
				id,
			},
			include: {
				vendor: true,
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
			where: this.withFilter(query),
			include: {
				vendor: true,
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
		fulltext = fulltext?.toLowerCase();
		return merge(filter || {}, fulltext ? {
			OR: [
				{
					AromaKeyword: {
						some: {
							keyword: {
								text: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
						},
					},
				},
				{
					code: {
						contains: fulltext,
						mode: "insensitive",
					},
				},
			]
		} : {});
	}
}
