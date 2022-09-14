import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITagEntity, ITagSource} from "@/puff-smith/service/tag/interface";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";

export const TagSource = () => new TagSourceClass();

export class TagSourceClass extends ContainerSource<ITagSource> implements ITagSource {
	constructor() {
		super("tag", prisma);
	}

	async map(tag: ISourceEntity<ITagSource>): Promise<ISourceItem<ITagSource>> {
		return tag;
	}

	async $get(id: string): Promise<ISourceEntity<ITagSource>> {
		return this.prisma.tag.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query({filter, orderBy, ...query}: ISourceQuery<ITagSource>): Promise<ISourceEntity<ITagSource>[]> {
		return this.prisma.tag.findMany({
			where: filter,
			orderBy,
			...pageOf(query),
		});
	}

	async $create(create: ISourceCreate<ITagSource>): Promise<ISourceEntity<ITagSource>> {
		return this.prisma.tag.create({
			data: create,
		});
	}

	async createToId({tag, group}: ISourceCreate<ITagSource>): Promise<{ id: string }> {
		return this.prisma.tag.findFirstOrThrow({
			where: {
				tag,
				group,
			},
		});
	}

	async $patch({id, ...patch}: UndefinableOptional<ISourceCreate<ITagSource>> & IWithIdentity): Promise<ISourceEntity<ITagSource>> {
		return this.prisma.tag.update({
			where: {id},
			data: patch,
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
}
