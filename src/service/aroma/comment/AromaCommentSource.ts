import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaCommentSource = (): IAromaCommentSource => {
	const commentSource = singletonOf(() => CommentSource().ofSource(source));

	const source: IAromaCommentSource = Source<IAromaCommentSource>({
		name: "aroma.comment",
		prisma,
		map: async aromaComment => aromaComment ? {
			...aromaComment,
			comment: await commentSource().mapper.map(aromaComment.comment),
		} : null,
		source: {
			count: async ({filter}) => source.prisma.aromaComment.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.aromaComment.findMany({
				where: filter,
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
			create: async ({comment, aromaId}) => source.prisma.aromaComment.create({
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
					aroma: {
						connect: {
							id: aromaId,
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
				};
				const items = await prisma.aromaComment.findMany({
					where,
					include: {
						comment: {
							include: {
								user: true,
							},
						},
					},
				});
				await prisma.aromaComment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
