import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {singletonOf} from "@leight-core/utils";

export const AromaInventoryRepository = (): IAromaInventoryRepository => {
	const aromaSource = singletonOf(() => AromaSource());

	return {
		source: AromaInventorySource(),
		create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
			const $aroma = await aromaSource.withPrisma(prisma).toMap(aroma.aromaId);
			return TransactionSource({...request, prisma}).handleTransaction({
				userId: userId(),
				cost: $aroma.cost,
				note: `Purchase of aroma [${$aroma.vendor.name} ${$aroma.name}]`,
				callback: async transaction => {
					const $aromaInventory = prisma.aromaInventory.create({
						data: {
							code: code || codeService().code(),
							aromaId: $aroma.id,
							transactionId: transaction.id,
							userId: userId(),
						}
					});
					await MixtureUserJob.async({userId: userId()}, userId());
					await memoIsOwned.delete($aroma.id, userId());
					return $aromaInventory;
				},
			});
		}),
	};
};

// export const AromaInventorySource = (): IAromaInventorySource => {
// 	const aromaSource = singletonOf(() => AromaSource(request));
// 	const transactionSource = singletonOf(() => TransactionSource(request));
// 	const codeService = singletonOf(() => CodeService());
//
// 	return {
// 		...Source<IAromaInventorySource>({
// 			name: "aroma-inventory",
// 			source: request.prisma.aromaInventory,
// 			mapper: async aromaTransaction => ({
// 				...aromaTransaction,
// 				aroma: await aromaSource().toMap(aromaTransaction.aromaId),
// 				transaction: await transactionSource().toMap(aromaTransaction.transactionId),
// 			}),
// 			create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
// 				const $aroma = await AromaSource({...request, prisma}).toMap(aroma.aromaId);
// 				return TransactionSource({...request, prisma}).handleTransaction({
// 					userId: userId(),
// 					cost: $aroma.cost,
// 					note: `Purchase of aroma [${$aroma.vendor.name} ${$aroma.name}]`,
// 					callback: async transaction => {
// 						const $aromaInventory = prisma.aromaInventory.create({
// 							data: {
// 								code: code || codeService().code(),
// 								aromaId: $aroma.id,
// 								transactionId: transaction.id,
// 								userId: userId(),
// 							}
// 						});
// 						await MixtureUserJob.async({userId: userId()}, userId());
// 						await memoIsOwned.delete($aroma.id, userId());
// 						return $aromaInventory;
// 					},
// 				});
// 			}),
// 		}),
// 		handleDelete: async ({request: {ids}}) => {
// 			const where = {
// 				id: {
// 					in: ids,
// 				},
// 				userId: userId(),
// 			};
// 			return prisma.$transaction(async prisma => {
// 				const aromaInventory = await AromaInventorySource({...request, prisma}).list(prisma.aromaInventory.findMany({where}));
// 				await prisma.aromaInventory.deleteMany({
// 					where,
// 				});
// 				await prisma.mixtureInventory.deleteMany({
// 					where: {
// 						aromaId: {
// 							in: aromaInventory.map(item => item.aromaId),
// 						},
// 						userId: userId(),
// 					}
// 				});
// 				return aromaInventory;
// 			});
// 		}
// 	};
// };
