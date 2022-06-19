import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {IWireDrawSource} from "@/puff-smith/service/wire/draw/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireDrawSource = (): IWireDrawSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IWireDrawSource = Source<IWireDrawSource>({
		name: "wire.draw",
		prisma,
		map: async wire => tagSource().map(wire?.draw),
		acl: {
			lock: true,
		},
		source: {
			count: async () => source.prisma.wireDraw.count({
				distinct: ["drawId"],
			}),
			query: async () => source.prisma.wireDraw.findMany({
				distinct: ["drawId"],
				select: {
					draw: true,
				},
				orderBy: [
					{draw: {sort: "asc"}},
				],
			}),
		},
	});

	return source;
};
