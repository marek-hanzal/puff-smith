import {TokenRepository} from "@/puff-smith/service/token/TokenRepository";
import {IUserTokenRepository, IUserTokenRepositoryCreate} from "@/puff-smith/service/user/token/interface";
import {UserRepository} from "@/puff-smith/service/user/UserRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserTokenRepository = (request: IUserTokenRepositoryCreate): IUserTokenRepository => {
	const userRepository = singletonOf(() => UserRepository(request));
	const tokenRepository = singletonOf(() => TokenRepository(request));

	return Repository<IUserTokenRepository>({
		name: "user-token",
		source: request.prisma.userToken,
		mapper: async userToken => ({
			...userToken,
			user: await userRepository().toMap(userToken.userId),
			token: await tokenRepository().toMap(userToken.tokenId),
		}),
		create: async create => request.prisma.userToken.create({
			data: create,
		})
	});
};
