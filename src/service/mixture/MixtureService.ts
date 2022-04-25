import {AromaService} from "@/puff-smith/service/aroma";
import {IMixtureService} from "@/puff-smith/service/mixture";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const MixtureService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IMixtureService>({
	name: "mixture",
	source: prismaClient.mixture,
	mapper: async mixture => {
		const aroma = await AromaService(prismaClient).toMap(mixture.aromaId);
		return {
			...mixture,
			content: mixture.content.toNumber(),
			diff: mixture.diff.toNumber(),
			nicotine: mixture.nicotine.toNumber(),
			vg: mixture.vg.toNumber(),
			pg: mixture.pg.toNumber(),
			vgToRound: Math.round(mixture.vg.toNumber() * 0.1) / 0.1,
			pgToRound: Math.round(mixture.pg.toNumber() * 0.1) / 0.1,
			vgToMl: mixture.vgToMl.toNumber(),
			pgToMl: mixture.pgToMl.toNumber(),
			aroma,
			volume: aroma.volume || 0,
		};
	},
	create: async mixture => prismaClient.mixture.create({
		data: mixture,
	}),
});
