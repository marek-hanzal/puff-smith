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
		map: async buildComment => ({
			...buildComment,
			comment: await commentSource().map(buildComment.comment),
		}),
		source: {
			count: async ({filter}) => source.prisma.buildComment.count({
				where: {
					...filter,
					build: {
						userId: source.user.required(),
					},
				},
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.buildComment.findMany({
				where: {
					...filter,
					build: {
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
					build: {
						userId: source.user.required(),
					},
				};
				const items = await prisma.buildComment.findMany({
					where,
					include: {
						comment: {
							include: {
								user: true,
							},
						},
					},
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
