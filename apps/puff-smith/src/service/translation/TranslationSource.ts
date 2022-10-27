import {Container}          from "@/puff-smith/service/Container";
import {ContainerSource}    from "@/puff-smith/service/ContainerSource";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {sha256}             from "@/puff-smith/service/utils/sha256";
import {
	IWithIdentity,
	merge,
	pageOf,
	QueryInfer,
	SourceInfer,
	UndefinableOptional,
	withFetch
}                           from "@leight-core/viv";

export class TranslationSourceClass extends ContainerSource<ITranslationSource> implements ITranslationSource {
	constructor() {
		super("translation");
	}

	async toItem({id, language, label: key, text: value}: SourceInfer.Entity<ITranslationSource>): Promise<SourceInfer.Item<ITranslationSource>> {
		return {
			id,
			language,
			key,
			value,
		};
	}

	async $get(id: string): Promise<SourceInfer.Entity<ITranslationSource>> {
		return this.container.prisma.translation.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query(query: SourceInfer.Query<ITranslationSource>): Promise<SourceInfer.Entity<ITranslationSource>[]> {
		return this.container.prisma.translation.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: SourceInfer.Query<ITranslationSource>): Promise<number> {
		return this.container.prisma.translation.count({
			where: this.withFilter(query),
		});
	}


	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<ITranslationSource>): QueryInfer.Filter<SourceInfer.Query<ITranslationSource>> | undefined {
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

	async $create(translation: SourceInfer.Create<ITranslationSource>): Promise<SourceInfer.Entity<ITranslationSource>> {
		return this.container.prisma.translation.create({
			data: {
				...translation,
				hash: sha256(translation.label),
			},
		});
	}

	async resolveId({label, language}: SourceInfer.Create<ITranslationSource>): Promise<IWithIdentity> {
		return this.container.prisma.translation.findUniqueOrThrow({
			where: {
				language_hash: {
					hash: sha256(label),
					language,
				}
			}
		});
	}

	async $patch({id, ...patch}: UndefinableOptional<SourceInfer.Create<ITranslationSource>> & IWithIdentity): Promise<SourceInfer.Entity<ITranslationSource>> {
		return this.container.prisma.translation.update({
			where: {id},
			data:  patch,
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<ITranslationSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.translation.findMany({
			where,
		});
		await this.container.prisma.translation.deleteMany({
			where,
		});
		return items;
	}
}

export const TranslationSource     = () => new TranslationSourceClass();
export const nextTranslationSource = () => withFetch(async () => Container().useTranslationSource(async t => t), "translation", "translationId");
