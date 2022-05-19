import {defaults} from "@/puff-smith/service";
import {TokenRepository} from "@/puff-smith/service/token/TokenRepository";
import {IUserTokenService, IUserTokenServiceCreate} from "@/puff-smith/service/user/token/interface";
import {UserRepository} from "@/puff-smith/service/user/UserRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserTokenRepository = (request: IUserTokenServiceCreate = defaults()): IUserTokenService => {
	const userService = singletonOf(() => UserRepository(request));
	const tokenService = singletonOf(() => TokenRepository(request));

	return Repository<IUserTokenService>({
		name: "user-token",
		source: request.prisma.userToken,
		mapper: async userToken => ({
			...userToken,
			user: await userService().toMap(userToken.userId),
			token: await tokenService().toMap(userToken.tokenId),
		}),
		create: async create => request.prisma.userToken.create({
			data: create,
		})
	});
};
