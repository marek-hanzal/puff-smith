import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonMarketSource, ICottonMarketSourceCreate} from "@/puff-smith/service/cotton/market/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonMarketSource = (request: ICottonMarketSourceCreate): ICottonMarketSource => {
	const cottonSource = singletonOf(() => CottonSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<ICottonMarketSource>({
		name: "cotton-market",
		source: request.prisma.cotton,
		mapper: async entity => ({
			cotton: await cottonSource().map(entity),
			isOwned: userId ? (await request.prisma.cottonInventory.count({
				where: {
					cottonId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cottonSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
