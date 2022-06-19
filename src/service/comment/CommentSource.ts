import {ICommentSource} from "@/puff-smith/service/comment/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const CommentSource = (): ICommentSource => {
	const source: ICommentSource = Source<ICommentSource>({
		name: "comment",
		prisma,
		map: async comment => comment ? {
			...comment,
			created: comment.created.toUTCString(),
		} : undefined,
		acl: {
			lock: true,
		},
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
				...pageOf(query),
			}),
			create: async ({comment}) => source.prisma.comment.create({
				data: {
					comment,
					userId: source.user.required(),
					created: new Date(),
				},
			}),
			patch: async patch => source.prisma.comment.update({
				where: {id: patch.id},
				data: {
					comment: patch.comment,
				}
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.comment.findMany({
					where,
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
