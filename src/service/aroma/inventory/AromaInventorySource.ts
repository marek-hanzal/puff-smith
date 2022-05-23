import {IAromaInventory, IAromaInventoryEntity, IAromaInventoryQuery, IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const AromaInventorySource = (): IAromaInventorySource => {
	const source: IAromaInventorySource = Source<IAromaInventoryEntity, IAromaInventory, IAromaInventoryQuery>({
		name: "aroma-inventory",
		prisma,
		get source() {
			return source.prisma.aromaInventory;
		},
	});

	return source;
};
