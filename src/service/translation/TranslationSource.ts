import {ContainerSource}    from "@/puff-smith/service/ContainerSource";
import prisma               from "@/puff-smith/service/side-effect/prisma";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {sha256}             from "@/puff-smith/service/utils/sha256";
import {
	IQueryFilter,
	ISourceCreate,
	ISourceEntity,
	ISourceItem,
	ISourceQuery,
	IWithIdentity,
	UndefinableOptional
}                           from "@leight-core/api";
import {pageOf}             from "@leight-core/server";
import {merge}              from "@leight-core/utils";

export const TranslationSource = () => new TranslationSourceClass();

export class TranslationSourceClass extends ContainerSource<ITranslationSource> implements ITranslationSource {
	constructor() {
		super("translation", prisma);
	}

	async map({id, language, label: key, text: value}: ISourceEntity<ITranslationSource>): Promise<ISourceItem<ITranslationSource>> {
		return {
			id,
			language,
			key,
			value,
		};
	}

	async $get(id: string): Promise<ISourceEntity<ITranslationSource>> {
		return this.prisma.translation.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query(query: ISourceQuery<ITranslationSource>): Promise<ISourceEntity<ITranslationSource>[]> {
		return this.prisma.translation.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: ISourceQuery<ITranslationSource>): Promise<number> {
		return this.prisma.translation.count({
			where: this.withFilter(query),
		});
	}


	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<ITranslationSource>): IQueryFilter<ISourceQuery<ITranslationSource>> | undefined {
		return merge(filter || {}, {
			AND: fulltext?.toLowerCase()?.split(/\s+/gi)?.map(fragment => ({
				OR: [
					{
						language: {
							contains: fragment,
							mode:     "insensitive",
						},
					},
					{
						label: {
							contains: fragment,
							mode:     "insensitive",
						},
					},
					{
						text: {
							contains: fragment,
							mode:     "insensitive",
						},
					},
				],
			})),
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
			data:  patch,
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<ITranslationSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.translation.findMany({
			where,
		});
		await this.prisma.translation.deleteMany({
			where,
		});
		return items;
	}
}
