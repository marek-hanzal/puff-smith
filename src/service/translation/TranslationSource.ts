import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";

export const TranslationSource = () => new TranslationSourceClass();

export class TranslationSourceClass extends ContainerSource<ITranslationSource> implements ITranslationSource {
	constructor() {
		super("translation", prisma);
	}

	async map({label: key, text: value}: ISourceEntity<ITranslationSource>): Promise<ISourceItem<ITranslationSource>> {
		return {
			key,
			value,
		};
	}

	async $query({filter, ...query}: ISourceQuery<ITranslationSource>): Promise<ISourceEntity<ITranslationSource>[]> {
		return this.prisma.translation.findMany({
			where: filter,
			...pageOf(query),
		});
	}

	async $count({filter}: ISourceQuery<ITranslationSource>): Promise<number> {
		return this.prisma.translation.count({
			where: filter,
		});
	}

	async $create(translation: ISourceCreate<ITranslationSource>): Promise<ISourceEntity<ITranslationSource>> {
		return this.prisma.translation.create({
			data: {
				...translation,
				hash: sha256(translation.label),
			},
		});
	}

	async createToId({label, language}: ISourceCreate<ITranslationSource>): Promise<{ id: string }> {
		return this.prisma.translation.findUniqueOrThrow({
			where: {
				language_hash: {
					hash: sha256(label),
					language,
				}
			}
		});
	}

	async $patch({id, ...patch}: UndefinableOptional<ISourceCreate<ITranslationSource>> & IWithIdentity): Promise<ISourceEntity<ITranslationSource>> {
		return this.prisma.translation.update({
			where: {id},
			data: patch,
		});
	}
}
