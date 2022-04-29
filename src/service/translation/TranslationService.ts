import {ServiceCreate} from "@/puff-smith/service";
import {ITranslationService, ITranslationServiceCreate} from "@/puff-smith/service/translation/interface";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {handleUniqueException, RepositoryService} from "@leight-core/server";

export const TranslationService = (request: ITranslationServiceCreate = ServiceCreate()): ITranslationService => RepositoryService<ITranslationService>({
	name: "translation",
	source: request.prisma.translation,
	mapper: async translation => ({
		key: translation.label,
		value: translation.text,
	}),
	create: async create => {
		const hash = sha256(create.label);
		try {
			return await request.prisma.translation.create({
				data: {
					...create,
					hash,
				}
			});
		} catch (e) {
			return handleUniqueException(e, async () => request.prisma.translation.update({
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
});
