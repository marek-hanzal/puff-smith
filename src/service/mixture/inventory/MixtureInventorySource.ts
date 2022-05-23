import {IMixtureInventory, IMixtureInventoryEntity, IMixtureInventoryQuery, IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureInventorySource = (): IMixtureInventorySource => {
	const mixtureSource = singletonOf(() => MixtureRepository());

	const source: IMixtureInventorySource = Source<IMixtureInventoryEntity, IMixtureInventory, IMixtureInventoryQuery>({
		name: "mixture-inventory",
		get source() {
			return source.prisma.mixtureInventory;
		},
		map: async mixtureInventory => {
			return {
				...mixtureInventory,
				mixture: await mixtureSource().sou.mapper.map(mixtureInventory.mixture)
			};
		},
	});

	return source;
};
