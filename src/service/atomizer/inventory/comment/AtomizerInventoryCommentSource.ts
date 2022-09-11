import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerInventoryCommentSource = (): IAtomizerInventoryCommentSource => {
	const commentSource = singletonOf(() => CommentSource().ofSource(source));

	const source: IAtomizerInventoryCommentSource = Source<IAtomizerInventoryCommentSource>({
		name: "atomizer.inventory.comment",
		prisma,
		map: async atomizerInventoryComment => atomizerInventoryComment ? {
			...atomizerInventoryComment,
			comment: await commentSource().mapper.map(atomizerInventoryComment.comment),
		} : null,
		source: {
			count: async ({filter}) => source.prisma.atomizerInventoryComment.count({
				where: {
					...filter,
					atomizerInventory: {
						userId: source.user.required(),
					},
				},
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.atomizerInventoryComment.findMany({
				where: {
					...filter,
					atomizerInventory: {
						userId: source.user.required(),
					},
				},
				orderBy,
				include: {
					comment: {
						include: {
							user: true,
						},
					},
				},
				...pageOf(query),
			}),
			create: async ({comment, atomizerInventoryId}) => source.prisma.atomizerInventoryComment.create({
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
					atomizerInventory: {
						connect: {
							id: atomizerInventoryId,
						}
					},
				},
				include: {
					comment: {
						include: {
							user: true,
						},
					},
				},
			}),
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
					atomizerInventory: {
						userId: source.user.required(),
					},
				};
				const items = await prisma.atomizerInventoryComment.findMany({
					where,
					include: {
						comment: {
							include: {
								user: true,
							},
						},
					},
				});
				await prisma.atomizerInventoryComment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
