import {IServiceCreate} from "@/puff-smith/service/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserService} from "@leight-core/server";

export const ServiceCreate = (userId?: string | null): IServiceCreate => ({
	prisma,
	userService: UserService(userId),
});
