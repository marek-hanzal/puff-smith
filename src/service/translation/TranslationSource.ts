import {ITranslationSource, ITranslationSourceCreate} from "@/puff-smith/service/translation/interface";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {onUnique, Source} from "@leight-core/server";

export const TranslationSource = (request: ITranslationSourceCreate): ITranslationSource => {
	return Source<ITranslationSource>({
		name: "translation",
		source: request.prisma.translation,
		mapper: async translation => ({
			key: translation.label,
			value: translation.text,
		}),
		create: async translation => {
			const create = {
				...translation,
				hash: sha256(translation.label),
			};
			try {
				return await request.prisma.translation.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => request.prisma.translation.update({
					where: {
						language_hash: {
							hash: create.hash,
							language: translation.language,
						},
					},
					data: create,
				}));
			}
		},
	});
};
