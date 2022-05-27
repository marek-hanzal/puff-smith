import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IMixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureBaseSource = (): IMixtureBaseSource => {
	const baseSource = singletonOf(() => BaseSource());

	const source: IMixtureBaseSource = Source<IMixtureBaseSource>({
		name: "mixture.inventory.base",
		prisma,
		map: async mixtureInventory => baseSource().map(mixtureInventory?.base),
		source: {
			count: async ({filter}) => prisma.mixtureInventory.count({
				distinct: ["baseId"],
				where: {
					base: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
			}),
			query: async ({filter}) => prisma.mixtureInventory.findMany({
				distinct: ["baseId"],
				select: {
					base: {
						include: {
							vendor: true,
						}
					},
				},
				where: {
					NOT: {
						baseId: null,
					},
					base: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
				orderBy: [
					{base: {name: "asc"}},
				],
			}),
		}
	});

	return source;
};
