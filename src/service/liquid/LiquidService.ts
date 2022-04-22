import {AromaService} from "@/puff-smith/service/aroma";
import {BaseService} from "@/puff-smith/service/base";
import {BoosterService} from "@/puff-smith/service/booster";
import {CodeService} from "@/puff-smith/service/code";
import {ILiquidService} from "@/puff-smith/service/liquid";
import {toLiquidQuickMixInfo} from "@/puff-smith/service/liquid/utils";
import prisma from "@/puff-smith/service/prisma";
import {TariffService} from "@/puff-smith/service/tariff";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => {
	const service = RepositoryService<ILiquidService>({
		name: "liquid",
		source: prismaClient.liquid,
		mapper: async liquid => ({
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			archived: liquid.archived?.toUTCString(),
			nicotine: liquid.nicotine.toNumber(),
			pg: liquid.pg.toNumber(),
			vg: liquid.vg.toNumber(),
			volume: liquid.volume.toNumber(),
			transaction: await TransactionService(prismaClient).toMap(liquid.transactionId),
		}),
		create: async ({code, aromas = [], bases = [], boosters = [], mixed, ...create}) => prisma.$transaction(prismaClient => TariffService(prismaClient).transactionOf({
			tariff: "default",
			userId: create.userId,
			price: "lab.liquid.create",
			note: "New liquid",
			callback: (_, transaction) => prismaClient.liquid.create({
				data: {
					...create,
					code: code || CodeService().code(),
					transactionId: transaction.id,
					created: new Date(),
					mixed: mixed || new Date(),
					LiquidAroma: {
						createMany: {
							data: aromas,
						}
					},
					LiquidBooster: {
						createMany: {
							data: boosters,
						}
					},
					LiquidBase: {
						createMany: {
							data: bases,
						}
					},
				},
			})
			})
		),
	});

	return {
		...service,
		handleQuickMix: async ({request: {name, userId, nicotine, aromaId, boosterId, baseId, mixed}}) => {
			const aroma = await AromaService(prismaClient).fetch(aromaId);
			const quickMixInfo = toLiquidQuickMixInfo({
				aroma,
				base: baseId ? await BaseService(prismaClient).fetch(baseId) : undefined,
				booster: boosterId ? await BoosterService(prismaClient).fetch(boosterId) : undefined,
				nicotine,
			});
			if (quickMixInfo.result?.error) {
				throw new Error(`Cannot create mix: "${quickMixInfo.result.error}".`);
			}

			const pgvg = quickMixInfo.result?.ratio || {pg: aroma.pg.toNumber(), vg: aroma.vg.toNumber()};

			return service.handleCreate({
				request: {
					...pgvg,
					name: name || aroma.name,
					userId,
					mixed,
					steep: aroma.steep,
					nicotine: quickMixInfo.result?.nicotine,
					volume: aroma.volume?.toNumber() || aroma.content.toNumber(),
					aromas: [
						{aromaId, content: quickMixInfo.aroma?.content || 0},
					],
					boosters: boosterId ? [
						{boosterId, content: quickMixInfo.booster?.volume || 0},
					] : [],
					bases: baseId ? [
						{baseId, content: quickMixInfo.base?.volume || 0},
					] : [],
				}
			});
		},
		handleQuickMixInfo: async ({request: {aromaId, baseId, boosterId, nicotine}}) => toLiquidQuickMixInfo({
			aroma: aromaId ? await AromaService(prismaClient).fetch(aromaId) : undefined,
			base: baseId ? await BaseService(prismaClient).fetch(baseId) : undefined,
			booster: boosterId ? await BoosterService(prismaClient).fetch(boosterId) : undefined,
			nicotine,
		}),
		handleCleverMix: async () => {
			throw new Error("not yet");
		},
		handleCleverMixInfo: async () => {
			throw new Error("not yet");
		},
	};
};
