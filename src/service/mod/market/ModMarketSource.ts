import {IModMarketSource, IModMarketSourceCreate} from "@/puff-smith/service/mod/market/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModMarketSource = (request: IModMarketSourceCreate): IModMarketSource => {
	const modSource = singletonOf(() => ModSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IModMarketSource>({
		name: "mod-market",
		source: request.prisma.mod,
		mapper: async entity => ({
			mod: await modSource().map(entity),
			isOwned: userId ? (await request.prisma.modInventory.count({
				where: {
					modId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => modSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
