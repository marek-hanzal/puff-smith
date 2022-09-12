import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITokenSource} from "@/puff-smith/service/token/interface";
import {onUnique, pageOf, Source} from "@leight-core/server";

export const TokenSource = (): ITokenSource => {
	const source: ITokenSource = Source<ITokenSource>({
		name: "token",
		prisma,
		map: async token => token || null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.token.count({
				where: {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				},
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.token.findMany({
				where: {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				},
				orderBy,
				...pageOf(query),
			}),
			create: async ({name}) => {
				try {
					return await source.prisma.token.create({
						data: {
							name,
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.token.findFirstOrThrow({
						where: {
							name,
						},
					}));
				}
			}
		},
		tokensOf: userId => source.list(source.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		})),
		fetchByNames: async tokens => {
			const $names = Array.isArray(tokens) ? tokens : tokens.split(/,\s*/ig).map(tokens => `${tokens}`.toLowerCase());
			return source.prisma.token.findMany({
				where: {
					OR: [
						{name: {in: $names}},
						{id: {in: $names}},
					],
				}
			});
		},
	});

	return source;
};
