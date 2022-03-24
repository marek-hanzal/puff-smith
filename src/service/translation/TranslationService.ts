import {ITranslationService} from "@/puff-smith/service/translation/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {sha256} from "@/puff-smith/service/sha256";
import {IPrismaClientTransaction} from "@leight-core/api";

export const TranslationService = (prismaClient: IPrismaClientTransaction = prisma): ITranslationService => {
	const service: ITranslationService = {
		...AbstractRepositoryService<ITranslationService>(prismaClient, prismaClient.translation, async translation => ({
			key: translation.label,
			value: translation.text,
		})),
		importers: () => ({
			translation: () => ({
				handler: service.create,
			}),
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => {
			const hash = sha256(create.label);
			try {
				return prismaClient.translation.create({
					data: {
						...create,
						hash,
					}
				})
			} catch (e) {
				return handleUniqueException(e, async () => prismaClient.translation.update({
					where: {
						language_hash: {
							hash,
							language: create.language,
						},
					},
					data: create,
				}));
			}
		}
	};

	return service;
}
