import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerInventorySource, IAtomizerInventorySourceCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerInventorySource = (request: IAtomizerInventorySourceCreate): IAtomizerInventorySource => {
	const atomizerSource = singletonOf(() => AtomizerSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return Source<IAtomizerInventorySource>({
		name: "atomizer-inventory",
		source: request.prisma.atomizerInventory,
		mapper: async atomizerInventory => ({
			...atomizerInventory,
			atomizer: await atomizerSource().toMap(atomizerInventory.atomizerId),
			transaction: await transactionSource().toMap(atomizerInventory.transactionId),
		}),
		create: async ({code, ...atomizer}) => prisma.$transaction(async prisma => {
			const $atomizer = await AtomizerSource({...request, prisma}).toMap(atomizer.atomizerId);
			return TransactionSource({...request, prisma}).handleTransaction({
				userId: userId(),
				cost: $atomizer.cost,
				note: `Purchase of atomizer [${$atomizer.vendor.name} ${$atomizer.name}]`,
				callback: async transaction => prisma.atomizerInventory.create({
					data: {
						code: code || codeService().code(),
						atomizerId: $atomizer.id,
						transactionId: transaction.id,
						userId: userId(),
					}
				}),
			});
		}),
	});
};
