import prisma from "@/puff-smith/service/side-effect/prisma";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {Source} from "@leight-core/server";

export const UserTokenSource = (): IUserTokenSource => {
	const source: IUserTokenSource = Source<IUserTokenSource>({
		name: "user.token",
		prisma,
		map: async userToken => userToken || null,
		source: {
			create: async create => source.prisma.userToken.create({
				data: create,
			}),
		},
	});

	return source;
};
