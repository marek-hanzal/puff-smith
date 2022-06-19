import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaInventoryCommentSource = (): IAromaInventoryCommentSource => {
	const commentSource = singletonOf(() => CommentSource().ofSource(source));

	const source: IAromaInventoryCommentSource = Source<IAromaInventoryCommentSource>({
		name: "aroma.inventory.comment",
		prisma,
		map: async aromaInventoryComment => aromaInventoryComment ? {
			...aromaInventoryComment,
			comment: await commentSource().mapper.map(aromaInventoryComment.comment),
		} : undefined,
		source: {
			count: async ({filter}) => source.prisma.aromaInventoryComment.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.aromaInventoryComment.findMany({
				where: filter,
				orderBy,
				include: {
					comment: true,
				},
				...pageOf(query),
			}),
			create: async ({comment, aromaInventoryId}) => source.prisma.aromaInventoryComment.create({
				data: {
					comment: {
						create: {
							comment,
							created: new Date(),
							user: {
								connect: {
									id: source.user.required(),
								}
							},
						},
					},
					aromaInventory: {
						connect: {
							id: aromaInventoryId,
						}
					},
				},
				include: {
					comment: true,
				},
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.aromaInventoryComment.findMany({
					where,
					include: {
						comment: true,
					}
				});
				await prisma.aromaInventoryComment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
