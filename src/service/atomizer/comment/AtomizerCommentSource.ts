import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerCommentSource = (): IAtomizerCommentSource => {
	const commentSource = singletonOf(() => CommentSource().ofSource(source));

	const source: IAtomizerCommentSource = Source<IAtomizerCommentSource>({
		name: "atomizer.comment",
		prisma,
		map: async atomizerComment => atomizerComment ? {
			...atomizerComment,
			comment: await commentSource().mapper.map(atomizerComment.comment),
		} : null,
		source: {
			count: async ({filter}) => source.prisma.atomizerComment.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.atomizerComment.findMany({
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
			create: async ({comment, atomizerId}) => source.prisma.atomizerComment.create({
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
					atomizer: {
						connect: {
							id: atomizerId,
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
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.atomizerComment.findMany({
					where,
					include: {
						comment: {
							include: {
								user: true,
							},
						},
					},
				});
				await prisma.atomizerComment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
