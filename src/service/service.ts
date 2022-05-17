import {IServiceCreate} from "@/puff-smith/service/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IEndpointParams} from "@leight-core/api";
import {UserService} from "@leight-core/server";

export const ServiceCreate = (userId?: string | null): IServiceCreate => ({
	prisma,
	userService: UserService(userId),
});

export const ofRequest = (params: IEndpointParams<any, any>) => {
	return ServiceCreate(params.toUserId());
};
