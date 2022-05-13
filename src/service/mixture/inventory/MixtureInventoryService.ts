import {ServiceCreate} from "@/puff-smith/service";
import {IMixtureInventoryService, IMixtureInventoryServiceCreate} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {RepositoryService} from "@leight-core/server";

export const MixtureInventoryService = (request: IMixtureInventoryServiceCreate = ServiceCreate()): IMixtureInventoryService => {
	const mixtureService = MixtureService(request);
	return {
		...RepositoryService<IMixtureInventoryService>({
			name: "mixture-inventory",
			source: request.prisma.mixtureInventory,
			mapper: async mixtureInventory => {
				return {
					...mixtureInventory,
					mixture: await mixtureService.toMap(mixtureInventory.mixtureId)
				};
			},
			create: async mixture => request.prisma.mixtureInventory.create({
				data: {
					...mixture,
					userId: request.userService.getUserId(),
				},
			}),
			onUnique: async mixture => request.prisma.mixtureInventory.findFirst({
				where: {
					...mixture,
					userId: request.userService.getUserId(),
				},
				rejectOnNotFound: true,
			}),
		}),
		toFilter: filter => ({
			...filter,
			userId: request.userService.getUserId(),
		}),
	};
};