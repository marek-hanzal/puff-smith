import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {toPercent} from "@leight-core/utils";

export const CellInfoSource = (): ICellInfoSource => {
	const source: ICellInfoSource = Source<ICellInfoSource>({
		name: "cell.info",
		prisma,
		map: async cellInfo => ({
			...cellInfo,
			created: cellInfo.created.toUTCString(),
		}),
		source: {
			count: async ({filter}) => source.prisma.cellInfo.count({
				where: {
					...filter,
					userId: source.user.required(),
				},
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.cellInfo.findMany({
				where: {
					...filter,
					userId: source.user.required(),
				},
				orderBy,
				...pageOf(query),
			}),
			create: async ({cellId, cellInventoryId, voltage, capacity}) => {
				const $cell = await source.prisma.cell.findUniqueOrThrow({
					where: {id: cellId},
				});
				const voltageRatio = voltage && $cell.voltageMax ? toPercent(voltage, $cell.voltageMax) : undefined;
				const capacityRatio = capacity && $cell.capacity ? toPercent(capacity, $cell.capacity) : undefined;
				let healthRatio = 0;
				voltageRatio && healthRatio++;
				capacityRatio && healthRatio++;
				const health = ((voltageRatio || 0) + (capacityRatio || 0)) / healthRatio;
				return source.prisma.cellInfo.create({
					data: {
						cellId,
						cellInventoryId,
						userId: source.user.required(),
						voltage,
						capacity,
						voltageRatio,
						capacityRatio,
						health,
						created: new Date(),
					}
				});
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.cellInfo.findMany({
						where,
					});
					await prisma.cellInfo.deleteMany({
						where,
					});
					return items;
				});
			},
		},
	});
	return source;
};
