import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonInventorySource, ICottonInventorySourceCreate} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonInventorySource = (request: ICottonInventorySourceCreate): ICottonInventorySource => {
	const cottonSource = singletonOf(() => CottonSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<ICottonInventorySource>({
			name: "cotton-inventory",
			source: request.prisma.cottonInventory,
			mapper: async cottonTransaction => ({
				...cottonTransaction,
				cotton: await cottonSource().toMap(cottonTransaction.cottonId),
				transaction: await transactionSource().toMap(cottonTransaction.transactionId),
			}),
			create: async ({code, ...cotton}) => prisma.$transaction(async prisma => {
				const $cotton = await CottonSource({...request, prisma}).toMap(cotton.cottonId);
				return TransactionSource({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $cotton.cost,
					note: `Purchase of cotton [${$cotton.vendor.name} ${$cotton.name}]`,
					callback: async transaction => prisma.cottonInventory.create({
						data: {
							code: code || codeService().code(),
							cottonId: $cotton.id,
							transactionId: transaction.id,
							userId: userId(),
						}
					}),
				});
			}),
		}),
		handleDelete: async ({request: {ids}}) => {
			const where = {
				id: {
					in: ids,
				},
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const cottonInventory = await CottonInventorySource({...request, prisma}).list(prisma.cottonInventory.findMany({where}));
				await prisma.cottonInventory.deleteMany({
					where,
				});
				return cottonInventory;
			});
		},
	};
};
