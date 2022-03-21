import prismaClient from "@/puff-smith/service/prisma";
import {IAtomizerTransactionCreate} from "@/puff-smith/service/atomizer/interface";
import {transactionCreate, transactionSum} from "@/puff-smith/service/transaction";
import {AtomizerService} from "@/puff-smith/service/atomizer/service";

export const atomizerTransactionCreate = async (atomizerTransactionCreate: IAtomizerTransactionCreate) => {
	return prismaClient.$transaction(async prisma => {
		const atomizerService = AtomizerService(prisma);
		const atomizer = await atomizerService.toMap(atomizerTransactionCreate.atomizerId);
		const transaction = await transactionCreate({
			amount: -1 * (atomizer.cost || 0),
			note: `Purchase of [${atomizer.vendor.name} ${atomizer.name}]`,
			userId: atomizerTransactionCreate.userId,
		}, prisma);
		(await transactionSum({
			filter: {
				userId: atomizerTransactionCreate.userId,
			}
		}, prisma)) < 0 && (() => {
			throw new Error("Not enough puffies")
		})();
		return await prisma.atomizerTransaction.create({
			data: {
				atomizerId: atomizer.id,
				transactionId: transaction.id,
				userId: atomizerTransactionCreate.userId,
			}
		});
	});
}
