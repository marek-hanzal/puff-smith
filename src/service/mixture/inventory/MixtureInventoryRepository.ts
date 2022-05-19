import {IMixtureInventoryRepository, IMixtureInventoryRepositoryCreate} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureInventoryRepository = (request: IMixtureInventoryRepositoryCreate): IMixtureInventoryRepository => {
	const mixtureRepository = singletonOf(() => MixtureRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IMixtureInventoryRepository>({
			name: "mixture-inventory",
			source: request.prisma.mixtureInventory,
			mapper: async mixtureInventory => {
				return {
					...mixtureInventory,
					mixture: await mixtureRepository().toMap(mixtureInventory.mixtureId)
				};
			},
			create: async mixture => {
				try {
					return await request.prisma.mixtureInventory.create({
						data: {
							...mixture,
							userId: userId(),
						},
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.mixtureInventory.findFirst({
						where: {
							...mixture,
							userId: userId(),
						},
						rejectOnNotFound: true,
					}));
				}
			},
		}),
		toFilter: filter => ({
			...filter,
			userId: userId(),
		}),
	};
};
