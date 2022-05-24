import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureInventorySource = (): IMixtureInventorySource => {
	const mixtureSource = singletonOf(() => MixtureSource());

	return Source<IMixtureInventorySource>({
		name: "mixture-inventory",
		prisma,
		map: async mixtureInventory => {
			return {
				...mixtureInventory,
				mixture: await mixtureSource().mapper.map(mixtureInventory.mixture)
			};
		},
	});
};
