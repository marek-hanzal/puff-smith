import {ContainerSource}    from "@/puff-smith/service/ContainerSource";
import prisma               from "@/puff-smith/service/side-effect/prisma";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {sha256}             from "@/puff-smith/service/utils/sha256";
import {
	IWithIdentity,
	QueryInfer,
	SourceInfer,
	UndefinableOptional
}                           from "@leight-core/api";
import {pageOf}             from "@leight-core/server";
import {merge}              from "@leight-core/utils";

export const TranslationSource = () => new TranslationSourceClass();

export class TranslationSourceClass extends ContainerSource<ITranslationSource> implements ITranslationSource {
	constructor() {
		super("translation", prisma);
	}

	async map({id, language, label: key, text: value}: SourceInfer.Entity<ITranslationSource>): Promise<SourceInfer.Item<ITranslationSource>> {
		return {
			id,
			language,
			key,
			value,
		};
	}

	async $get(id: string): Promise<SourceInfer.Entity<ITranslationSource>> {
		return this.prisma.translation.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query(query: SourceInfer.Query<ITranslationSource>): Promise<SourceInfer.Entity<ITranslationSource>[]> {
		return this.prisma.translation.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: SourceInfer.Query<ITranslationSource>): Promise<number> {
		return this.prisma.translation.count({
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
		return this.prisma.translation.create({
			data: {
				...translation,
				hash: sha256(translation.label),
			},
		});
	}

	async resolveId({label, language}: SourceInfer.Create<ITranslationSource>): Promise<IWithIdentity> {
		return this.prisma.translation.findUniqueOrThrow({
			where: {
				language_hash: {
					hash: sha256(label),
					language,
				}
			}
		});
	}

	async $patch({id, ...patch}: UndefinableOptional<SourceInfer.Create<ITranslationSource>> & IWithIdentity): Promise<SourceInfer.Entity<ITranslationSource>> {
		return this.prisma.translation.update({
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
		const items = await this.prisma.translation.findMany({
			where,
		});
		await this.prisma.translation.deleteMany({
			where,
		});
		return items;
	}
}
