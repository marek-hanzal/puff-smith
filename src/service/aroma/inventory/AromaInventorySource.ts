import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaInventorySource = (): IAromaInventorySource => {
	const codeService = singletonOf(() => CodeService());

	const source: IAromaInventorySource = Source<IAromaInventorySource>({
		name: "aroma-inventory",
		prisma,
		map: async item => {
			throw new Error("not yet");
		},
		source: {
			create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
				const transactionSource = TransactionSource();
				transactionSource.withPrisma(prisma);
				const $aroma = await AromaSource().withPrisma(prisma).get(aroma.aromaId);
				const userId = source.user.required();
				return transactionSource.handleTransaction({
					userId,
					cost: $aroma.cost,
					note: `Purchase of aroma [${$aroma.vendor.name} ${$aroma.name}]`,
					callback: async transaction => {
						const $aromaInventory = prisma.aromaInventory.create({
							data: {
								code: code || codeService().code(),
								aromaId: $aroma.id,
								transactionId: transaction.id,
								userId,
							},
							include: {
								aroma: {
									include: {
										vendor: true,
									},
								},
								transaction: true,
							}
						});
						await MixtureUserJob.async({userId}, userId);
						await memoIsOwned.delete($aroma.id, userId);
						return $aromaInventory;
					},
				});
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const aromaInventory = await prisma.aromaInventory.findMany({
						where,
						include: {
							aroma: {
								include: {
									vendor: true,
								}
							}
						}
					});
					await prisma.aromaInventory.deleteMany({
						where,
					});
					await prisma.mixtureInventory.deleteMany({
						where: {
							aromaId: {
								in: aromaInventory.map(item => item.aromaId),
							},
							userId: source.user.required(),
						}
					});
					return aromaInventory;
				});
			}
		}
	});

	return source;
};
