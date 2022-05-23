import {ITokenSource, ITokenSourceCreate} from "@/puff-smith/service/token/interface";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const TokenSource = (request: ITokenSourceCreate): ITokenSource => {
	const tokenSource = singletonOf(() => TokenSource(request));

	return {
		...Source<ITokenSource>({
			name: "token",
			source: request.prisma.token,
			mapper: async token => token,
			create: async token => {
				try {
					return await request.prisma.token.create({
						data: token,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.token.findFirst({
						where: {
							name: token.name,
						},
						rejectOnNotFound: true,
					}));
				}
			},
		}),
		tokensOf: userId => tokenSource().list(request.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		})),
	};
};
