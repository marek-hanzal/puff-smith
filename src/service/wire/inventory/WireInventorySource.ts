import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IWireInventorySource, IWireInventorySourceCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireInventorySource = (request: IWireInventorySourceCreate): IWireInventorySource => {
	const wireSource = singletonOf(() => WireSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<IWireInventorySource>({
			name: "wire-inventory",
			source: request.prisma.wireInventory,
			mapper: async wireTransaction => ({
				...wireTransaction,
				wire: await wireSource().toMap(wireTransaction.wireId),
				transaction: await transactionSource().toMap(wireTransaction.transactionId),
			}),
			create: async ({code, ...wireInventory}) => prisma.$transaction(async prisma => {
				const wire = await WireSource({...request, prisma}).toMap(wireInventory.wireId);
				return TransactionSource({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: wire.cost,
					note: `Purchase of wire [${wire.vendor.name} ${wire.name}]`,
					callback: async transaction => prisma.wireInventory.create({
						data: {
							code: code || codeService().code(),
							wireId: wire.id,
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
				const wireInventorySource = await WireInventorySource({...request, prisma}).list(prisma.wireInventory.findMany({where}));
				await prisma.wireInventory.deleteMany({
					where,
				});
				return wireInventorySource;
			});
		},
	};
};
