import {defaults} from "@/puff-smith/service";
import {TokenService} from "@/puff-smith/service/token/TokenService";
import {IUserTokenService, IUserTokenServiceCreate} from "@/puff-smith/service/user/token/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const UserTokenService = (request: IUserTokenServiceCreate = defaults()): IUserTokenService => {
	const userService = singletonOf(() => UserService(request));
	const tokenService = singletonOf(() => TokenService(request));

	return RepositoryService<IUserTokenService>({
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
