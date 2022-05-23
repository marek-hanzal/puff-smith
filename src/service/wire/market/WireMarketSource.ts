import {IWireMarketSource, IWireMarketSourceCreate} from "@/puff-smith/service/wire/market/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireMarketSource = (request: IWireMarketSourceCreate): IWireMarketSource => {
	const wireSource = singletonOf(() => WireSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IWireMarketSource>({
		name: "wire-market",
		source: request.prisma.wire,
		mapper: async entity => ({
			wire: await wireSource().map(entity),
			isOwned: userId ? (await request.prisma.wireInventory.count({
				where: {
					wireId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => wireSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
