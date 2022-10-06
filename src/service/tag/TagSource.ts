import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {
	ITagEntity,
	ITagSource
}                        from "@/puff-smith/service/tag/interface";
import {
	IWithIdentity,
	QueryInfer,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/api";
import {pageOf}          from "@leight-core/server";
import {merge}           from "@leight-core/utils";

export const TagSource = () => new TagSourceClass();

export class TagSourceClass extends ContainerSource<ITagSource> implements ITagSource {
	constructor() {
		super("tag", prisma);
	}

	async map(tag: SourceInfer.Entity<ITagSource>): Promise<SourceInfer.Item<ITagSource>> {
		return tag;
	}

	async $get(id: string): Promise<SourceInfer.Entity<ITagSource>> {
		return this.prisma.tag.findUniqueOrThrow({
			where: {id},
		});
	}

	async $count(query: SourceInfer.Query<ITagSource>): Promise<number> {
		return this.prisma.tag.count({
			where: this.withFilter(query),
		});
	}

	async $query({orderBy, ...query}: SourceInfer.Query<ITagSource>): Promise<SourceInfer.Entity<ITagSource>[]> {
		return this.prisma.tag.findMany({
			where: this.withFilter(query),
			orderBy,
			...pageOf(query),
		});
	}

	async updateKeywords(tag: ITagEntity): Promise<ITagEntity> {
		return this.container.useKeywordSource(async keywordSource => {
			const source: string[] = [
				`${tag.group}.${tag.tag}`,
			];
			(await this.prisma.translation.findMany({
				where: {
					label: `common.${tag.group}.${tag.tag}`,
				}
			})).map(({text}) => source.push(text));
			await this.prisma.tagKeyword.deleteMany({
				where: {tagId: tag.id},
			});
			await this.prisma.tagKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					tagId:     tag.id,
					keywordId: (await keyword).id,
				}))),
			});
			return tag;
		});
	}

	async $create({tag, ...create}: SourceInfer.Create<ITagSource>): Promise<SourceInfer.Entity<ITagSource>> {
		return this.updateKeywords(await this.prisma.tag.create({
			data: {
				...create,
				tag: `${tag}`,
			},
		}));
	}

	async $patch({id, tag, ...patch}: UndefinableOptional<SourceInfer.Create<ITagSource>> & IWithIdentity): Promise<SourceInfer.Entity<ITagSource>> {
		return this.updateKeywords(await this.prisma.tag.update({
			where: {id},
			data:  {
				...patch,
				tag: `${tag}`,
			},
		}));
	}

	async createToId({tag, group}: SourceInfer.Create<ITagSource>): Promise<{ id: string }> {
		return this.prisma.tag.findFirstOrThrow({
			where: {
				tag: `${tag}`,
				group,
			},
		});
	}

	async fetchByTags(tags: string | string[] | undefined, group: string): Promise<ITagEntity[]> {
		if (!tags) {
			return [];
		}
		const $tags = Array.isArray(tags) ? tags : tags.split(/,\s*/ig).map(tag => `${tag}`.toLowerCase());
		return this.prisma.tag.findMany({
			where: {
				OR: [
					{
						tag: {
							in: $tags,
						},
					},
					{
						id: {
							in: $tags,
						},
					},
				],
				group,
			}
		});
	}

	async fetchTag(group: string, tag?: string, tagId?: string): Promise<ITagEntity> {
		if (!tag && !tagId) {
			throw new Error(`Provide [tag] or [tagId] in group [${group}].`);
		}
		return this.prisma.tag.findUniqueOrThrow({
			where: tagId ? {
				id: tagId,
			} : {
				tag_group: {
					group,
					tag: tag!,
				}
			},
		});
	}

	withFilter({filter: {fulltext, id, ...filter} = {}}: SourceInfer.Query<ITagSource>): QueryInfer.Filter<SourceInfer.Query<ITagSource>> | undefined {
		fulltext = fulltext?.toLowerCase();
		return merge(filter || {}, fulltext || id ? {
			OR: [
				fulltext ? {
					TagKeyword: {
						some: {
							keyword: {
								text: {
									contains: fulltext,
									mode:     "insensitive",
								},
							},
						},
					},
				} : undefined,
				id ? {
					id: {
						in: Array.isArray(id) ? id : [id],
					},
				} : undefined,
			],
		} : {});
	}
}
