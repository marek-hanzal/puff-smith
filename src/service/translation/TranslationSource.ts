import prisma from "@/puff-smith/service/side-effect/prisma";
import {TranslationCache} from "@/puff-smith/service/translation/cache";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {onUnique, pageOf, Source} from "@leight-core/server";

export const TranslationSource = (): ITranslationSource => {
	const source: ITranslationSource = Source<ITranslationSource>({
		name: "translation",
		prisma,
		map: async translation => translation ? {
			key: translation.label,
			value: translation.text,
		} : null,
		cache: TranslationCache,
		source: {
			query: async ({filter, ...query}) => source.prisma.translation.findMany({
				where: filter,
				...pageOf(query),
			}),
			create: async translation => {
				const create = {
					...translation,
					hash: sha256(translation.label),
				};
				try {
					return await source.prisma.translation.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.translation.update({
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
		},
	});

	return source;
};
