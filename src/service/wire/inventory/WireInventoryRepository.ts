import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {IWireInventoryRepository, IWireInventoryRepositoryCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireInventoryRepository = (request: IWireInventoryRepositoryCreate): IWireInventoryRepository => {
	const wireRepository = singletonOf(() => WireRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IWireInventoryRepository>({
			name: "wire-inventory",
			source: request.prisma.wireInventory,
			mapper: async wireTransaction => ({
				...wireTransaction,
				wire: await wireRepository().toMap(wireTransaction.wireId),
				transaction: await transactionRepository().toMap(wireTransaction.transactionId),
			}),
			create: async ({code, ...wireInventory}) => prisma.$transaction(async prisma => {
				const wire = await WireRepository({...request, prisma}).toMap(wireInventory.wireId);
				return TransactionRepository({...request, prisma}).handleTransaction({
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
				const wireInventoryRepository = await WireInventoryRepository({...request, prisma}).list(prisma.wireInventory.findMany({where}));
				await prisma.wireInventory.deleteMany({
					where,
				});
				return wireInventoryRepository;
			});
		},
	};
};
