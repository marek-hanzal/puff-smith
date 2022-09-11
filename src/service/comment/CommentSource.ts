import {ICommentSource} from "@/puff-smith/service/comment/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CommentSource = (): ICommentSource => {
	const userSource = singletonOf(() => UserSource().ofSource(source));

	const source: ICommentSource = Source<ICommentSource>({
		name: "comment",
		prisma,
		map: async comment => comment ? {
			...comment,
			created: comment.created.toUTCString(),
			user: await userSource().mapper.map(comment.user),
		} : null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.comment.count({
				where: merge(filter, {
					comment: {
						contains: fulltext,
						mode: "insensitive",
					},
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.comment.findMany({
				where: merge(filter, {
					comment: {
						contains: fulltext,
						mode: "insensitive",
					},
				}),
				orderBy: [
					{created: "asc"},
				],
				include: {
					user: true,
				},
				...pageOf(query),
			}),
			create: async ({comment}) => source.prisma.comment.create({
				data: {
					comment,
					userId: source.user.required(),
					created: new Date(),
				},
				include: {
					user: true,
				},
			}),
			patch: async patch => source.prisma.comment.update({
				where: {id: patch.id},
				data: {
					comment: patch.comment,
				},
				include: {
					user: true,
				},
			}),
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.comment.findMany({
					where,
					include: {
						user: true,
					},
				});
				await prisma.comment.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
