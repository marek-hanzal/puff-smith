import prismaClient from "@/puff-smith/service/prisma";
import {IUserQuery} from "@/puff-smith/service/user/interface";
import {toQuery} from "@leight-core/server";
import {userListMapper} from "@/puff-smith/service/user/mapper";

export const userQuery = async (query: IUserQuery) => toQuery<typeof userListMapper, IUserQuery>({
	query,
	source: prismaClient.user,
	mapper: userListMapper,
})
