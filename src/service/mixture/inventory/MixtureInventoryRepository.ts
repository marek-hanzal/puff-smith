import {IMixtureInventoryCreate, IMixtureInventoryRepository, IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import {Repository, uniqueOf} from "@leight-core/server";

export const MixtureInventoryRepository = (): IMixtureInventoryRepository => {
	const source = MixtureInventorySource();
	return Repository<IMixtureInventoryCreate, IMixtureInventorySource>({
		source,
		create: async mixtureInventory => {
			try {
				return await source.prisma.mixtureInventory.create({
					data: {
						...mixtureInventory,
						userId: source.user.required(),
					},
					include: {
						mixture: {
							include: {
								aroma: {
									include: {
										vendor: true,
									}
								},
							}
						},
					},
				});
			} catch (e) {
				return uniqueOf(e, async () => source.prisma.mixtureInventory.findFirst({
					where: {
						...mixtureInventory,
						userId: source.user.required(),
					},
					include: {
						mixture: {
							include: {
								aroma: {
									include: {
										vendor: true,
									}
								},
							}
						},
					},
					rejectOnNotFound: true,
				}));
			}
		},
	});
};
