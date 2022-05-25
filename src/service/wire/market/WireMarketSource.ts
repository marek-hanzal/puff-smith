import prisma from "@/puff-smith/service/side-effect/prisma";
import {IWireMarketSource} from "@/puff-smith/service/wire/market/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireMarketSource = (): IWireMarketSource => {
	const wireSource = singletonOf(() => WireSource());

	const source: IWireMarketSource = Source<IWireMarketSource>({
		name: "wire.market",
		prisma,
		map: async wire => wire ? ({
			wire: await wireSource().mapper.map(wire),
			isOwned: source.user.optional() ? (await source.prisma.wireInventory.count({
				where: {
					wireId: wire.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
