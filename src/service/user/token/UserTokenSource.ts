import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {IUserTokenSource, IUserTokenSourceCreate} from "@/puff-smith/service/user/token/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserTokenSource = (request: IUserTokenSourceCreate): IUserTokenSource => {
	const userSource = singletonOf(() => UserSource(request));
	const tokenSource = singletonOf(() => TokenSource(request));

	return Source<IUserTokenSource>({
		name: "user-token",
		source: request.prisma.userToken,
		mapper: async userToken => ({
			...userToken,
			user: await userSource().toMap(userToken.userId),
			token: await tokenSource().toMap(userToken.tokenId),
		}),
		create: async create => request.prisma.userToken.create({
			data: create,
		})
	});
};
