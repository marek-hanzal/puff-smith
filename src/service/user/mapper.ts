import {IUser, IUsers} from "@/puff-smith/service/user/interface";
import {User} from "@prisma/client";
import prismaClient from "@/puff-smith/service/prisma";

export const userListMapper = async (users: IUsers) => await Promise.all((await users).map(userMapper));

export const userMapper = async (user: User): Promise<IUser> => {
	return {
		...user,
	};
}

export const userFetch = async (userId: string) => prismaClient.user.findFirst({
	where: {
		id: userId,
	}
})

export const userRequire = async (userId: string) => (await userFetch(userId))!!;
