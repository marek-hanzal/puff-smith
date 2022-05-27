import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModInventorySource = (): IModInventorySource => {
	const modSource = singletonOf(() => ModSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IModInventorySource = Source<IModInventorySource>({
		name: "mod.inventory",
		prisma,
		map: async modInventory => modInventory ? ({
			...modInventory,
			mod: await modSource().mapper.map(modInventory.mod),
			transaction: await transactionSource().mapper.map(modInventory.transaction),
		}) : undefined,
		source: {
			create: async ({code, ...mod}) => prisma.$transaction(async prisma => {
				const modSource = ModSource().withPrisma(prisma);
				const transactionSource = TransactionSource().withPrisma(prisma);
				const $mod = await modSource.get(mod.modId);
				return transactionSource.handleTransaction({
					userId: source.user.required(),
					cost: $mod.cost,
					note: `Purchase of mod [${$mod.vendor.name} ${$mod.name}]`,
					callback: async transaction => prisma.modInventory.create({
						data: {
							code: code || codeService().code(),
							modId: $mod.id,
							transactionId: transaction.id,
							userId: source.user.required(),
						},
						include: {
							mod: {
								include: {
									vendor: true,
									ModCell: {
										include: {
											cell: true,
										}
									},
								},
							},
							transaction: true,
						}
					}),
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
					const modInventory = prisma.modInventory.findMany({
						where,
						include: {
							mod: {
								include: {
									vendor: true,
									ModCell: {
										include: {
											cell: true,
										}
									},
								},
							},
							transaction: true,
						}
					});
					await prisma.modInventory.deleteMany({
						where,
					});
					return modInventory;
				});
			},
		}
	});

	return source;
};
