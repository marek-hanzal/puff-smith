import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerInventorySource = (): IAtomizerInventorySource => {
	const atomizerSource = singletonOf(() => AtomizerSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IAtomizerInventorySource = Source<IAtomizerInventorySource>({
		name: "atomizer.inventory",
		prisma: prisma,
		map: async atomizerInventory => atomizerInventory ? ({
			...atomizerInventory,
			atomizer: await atomizerSource().mapper.map(atomizerInventory.atomizer),
			transaction: await transactionSource().mapper.map(atomizerInventory.transaction),
		}) : undefined,
		source: {
			create: async ({code, atomizerId}) => prisma.$transaction(async prisma => {
				const $atomizer = await AtomizerSource().withPrisma(prisma).get(atomizerId);
				const transactionSource = TransactionSource();
				transactionSource.withPrisma(prisma);
				return transactionSource.handleTransaction({
					userId: source.user.required(),
					cost: $atomizer.cost,
					note: `Purchase of atomizer [${$atomizer.vendor.name} ${$atomizer.name}]`,
					callback: async transaction => prisma.atomizerInventory.create({
						data: {
							code: code || codeService().code(),
							atomizerId: $atomizer.id,
							transactionId: transaction.id,
							userId: source.user.required(),
						},
						include: {
							atomizer: {
								include: {
									vendor: true,
									AtomizerDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								}
							},
							transaction: true,
						}
					}),
				});
			}),
		}
	});

	return source;
};
