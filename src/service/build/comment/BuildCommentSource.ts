import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BuildCommentSource = (): IBuildCommentSource => {
	const commentSource = singletonOf(() => CommentSource().ofSource(source));

	const source: IBuildCommentSource = Source<IBuildCommentSource>({
		name: "build.comment",
		prisma,
		map: async buildComment => buildComment ? {
			...buildComment,
			comment: await commentSource().mapper.map(buildComment.comment),
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			count: async ({filter}) => source.prisma.buildComment.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.buildComment.findMany({
				where: filter,
				orderBy,
				include: {
					comment: true,
				},
				...pageOf(query),
			}),
			create: async ({comment, buildId}) => source.prisma.buildComment.create({
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
					build: {
						connect: {
							id: buildId,
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
				const items = await prisma.buildComment.findMany({
					where,
					include: {
						comment: true,
					}
				});
				await prisma.buildComment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
