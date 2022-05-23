import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerMarketSource, IAtomizerMarketSourceCreate} from "@/puff-smith/service/atomizer/market/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerMarketSource = (request: IAtomizerMarketSourceCreate): IAtomizerMarketSource => {
	const atomizerSource = singletonOf(() => AtomizerSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IAtomizerMarketSource>({
		name: "atomizer-market",
		source: request.prisma.atomizer,
		mapper: async entity => ({
			atomizer: await atomizerSource().map(entity),
			isOwned: userId ? (await request.prisma.atomizerInventory.count({
				where: {
					atomizerId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => atomizerSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
