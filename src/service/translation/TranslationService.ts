import {ITranslationService} from "@/puff-smith/service/translation/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {sha256} from "@/puff-smith/service/sha256";
import {IPrismaClientTransaction} from "@leight-core/api";

export const TranslationService = (prismaClient: IPrismaClientTransaction = prisma): ITranslationService => {
	const service: ITranslationService = {
		...AbstractRepositoryService<ITranslationService>(prismaClient, prismaClient.translation, async translation => ({
			key: translation.label,
			value: translation.text,
		})),
		importers() {
			const handler = service.create;
			return ({
				translation: () => ({
					handler,
				}),
			})
		},
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => {
			const hash = sha256(create.label);
			try {
				return await prismaClient.translation.create({
					data: {
						...create,
						hash,
					}
				})
			} catch (e: any) {
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					return await prismaClient.translation.update({
						where: {
							language_hash: {
								hash,
								language: create.language,
							},
						},
						data: create,
					})
				}
				throw e;
			}
		}
	};

	return service;
}
