import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {onUnique, pageOf, Source} from "@leight-core/server";

export const TagSource = (): ITagSource => {
	const source: ITagSource = Source<ITagSource>({
		name: "tag",
		prisma,
		map: async tag => tag,
		source: {
			get: async id => source.prisma.tag.findUniqueOrThrow({
				where: {id},
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.tag.findMany({
				where: filter,
				orderBy,
				...pageOf(query),
			}),
			create: async tag => {
				const create = {
					...tag,
					tag: `${tag.tag}`,
				};
				try {
					return await source.prisma.tag.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.tag.update({
						where: {
							id: (await source.prisma.tag.findFirstOrThrow({
								where: {
									tag: `${create.tag}`,
									group: create.group,
								},
							})).id,
						},
						data: create,
					}));
				}
			},
		},
		fetchByTags: async (tags, group) => {
			if (!tags) {
				return [];
			}
			const $tags = Array.isArray(tags) ? tags : tags.split(/,\s*/ig).map(tag => `${tag}`.toLowerCase());
			return source.prisma.tag.findMany({
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
		},
		fetchTag: (group, tag, tagId) => {
			if (!tag && !tagId) {
				throw new Error(`Provide [tag] or [tagId] in group [${group}].`);
			}
			return source.prisma.tag.findUniqueOrThrow({
				where: tagId ? {
					id: tagId,
				} : {
					tag_group: {
						group,
						tag: tag!,
					}
				},
			});
		},
	});

	return source;
};
