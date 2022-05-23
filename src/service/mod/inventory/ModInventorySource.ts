import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModTransactionSource, IModTransactionSourceCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModInventorySource = (request: IModTransactionSourceCreate): IModTransactionSource => {
	const modSource = singletonOf(() => ModSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<IModTransactionSource>({
			name: "mod-inventory",
			source: request.prisma.modInventory,
			mapper: async modTransaction => ({
				...modTransaction,
				mod: await modSource().toMap(modTransaction.modId),
				transaction: await transactionSource().toMap(modTransaction.transactionId),
			}),
			create: async ({code, ...mod}) => prisma.$transaction(async prisma => {
				const $mod = await ModSource({...request, prisma}).toMap(mod.modId);
				return TransactionSource({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $mod.cost,
					note: `Purchase of mod [${$mod.vendor.name} ${$mod.name}]`,
					callback: async transaction => prisma.modInventory.create({
						data: {
							code: code || codeService().code(),
							modId: $mod.id,
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
				const modInventory = await ModInventorySource({...request, prisma}).list(prisma.modInventory.findMany({where}));
				await prisma.modInventory.deleteMany({
					where,
				});
				return modInventory;
			});
		},
	};
};
