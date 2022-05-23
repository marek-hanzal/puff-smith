import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseMarketSource, IBaseMarketSourceCreate} from "@/puff-smith/service/base/market/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseMarketSource = (request: IBaseMarketSourceCreate): IBaseMarketSource => {
	const baseSource = singletonOf(() => BaseSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IBaseMarketSource>({
		name: "base-market",
		source: request.prisma.base,
		mapper: async entity => ({
			base: await baseSource().map(entity),
			isOwned: userId ? (await request.prisma.baseInventory.count({
				where: {
					baseId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => baseSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
