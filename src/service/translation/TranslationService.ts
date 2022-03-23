import {ITranslationService} from "@/puff-smith/service/translation/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {sha256} from "@/puff-smith/service/sha256";

export const TranslationService = (prismaClient = prisma): ITranslationService => ({
	...AbstractRepositoryService<ITranslationService>(prismaClient, prismaClient.translation, async translation => ({
		key: translation.label,
		value: translation.text,
	})),
	importers() {
		const handler = this.create;
		return ({
			translation: () => ({
				handler,
			}),
		})
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
})
