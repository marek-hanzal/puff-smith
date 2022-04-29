import {ServiceCreate} from "@/puff-smith/service";
import {TokenService} from "@/puff-smith/service/token/TokenService";
import {IUserTokenService, IUserTokenServiceCreate} from "@/puff-smith/service/user/token/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {RepositoryService} from "@leight-core/server";

export const UserTokenService = (request: IUserTokenServiceCreate = ServiceCreate()): IUserTokenService => RepositoryService<IUserTokenService>({
	name: "user-token",
	source: request.prisma.userToken,
	mapper: async userToken => ({
		...userToken,
		user: await UserService().toMap(userToken.userId),
		token: await TokenService().toMap(userToken.tokenId),
	}),
	create: async create => request.prisma.userToken.create({
		data: create,
	})
});
