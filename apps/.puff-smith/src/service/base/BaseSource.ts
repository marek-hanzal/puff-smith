import {
    IBaseEntity,
    IBaseSource
}                        from "@/puff-smith/service/base/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {sha256}          from "@/puff-smith/service/utils/sha256";
import {
    IWithIdentity,
    merge,
    pageOf,
    SourceInfer,
    UndefinableOptional
}                        from "@leight-core/viv";

export const BaseSource = () => new BaseSourceClass();

export class BaseSourceClass extends ContainerSource<IBaseSource> implements IBaseSource {
	constructor() {
		super("base");
	}

	async toItem(base: SourceInfer.Entity<IBaseSource>): Promise<SourceInfer.Item<IBaseSource>> {
		return {
			...base,
			nicotine: base.nicotine?.toNumber() || null,
		};
	}

	async updateKeywords(base: IBaseEntity): Promise<IBaseEntity> {
		// return this.container.useKeywordSource(async keywordSource => {
		// const $base = await this.toItem(base);
		// const source: string[] = [
		// 	$base.code,
		// 	$base.vendor.name,
		// 	$base.name,
		// 	...$base.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// ];
		// (await this.container.prisma.translation.findMany({
		// 	where: {
		// 		label: {
		// 			in: $base.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// 		},
		// 	}
		// })).map(({text}) => source.push(text));
		// await this.container.prisma.baseKeyword.deleteMany({
		// 	where: {baseId: base.id},
		// });
		// await this.container.prisma.baseKeyword.createMany({
		// 	data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
		// 		baseId: base.id,
		// 		keywordId: (await keyword).id,
		// 	}))),
		// });
		return base;
		// });
	}

	async $create(base: SourceInfer.Create<IBaseSource>): Promise<SourceInfer.Entity<IBaseSource>> {
		return this.updateKeywords(await this.container.prisma.base.create({
			data: {
				...base,
				hash: sha256(JSON.stringify(base)),
			},
		}));
	}

	async $patch({id, ...base}: UndefinableOptional<SourceInfer.Create<IBaseSource>> & IWithIdentity): Promise<SourceInfer.Entity<IBaseSource>> {
		return this.updateKeywords(await this.container.prisma.base.update({
			where: {id},
			data:  base,
		}));
	}

	async resolveId(base: SourceInfer.Create<IBaseSource>): Promise<IWithIdentity> {
		return this.container.prisma.base.findFirstOrThrow({
			select: {
				id: true,
			},
			where:  {
				hash: sha256(JSON.stringify(base)),
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IBaseSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.base.findMany({
			where,
		});
		await this.container.prisma.base.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IBaseSource>> {
		return this.container.prisma.base.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async $query(query: SourceInfer.Query<IBaseSource>): Promise<SourceInfer.Entity<IBaseSource>[]> {
		return this.container.prisma.base.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: SourceInfer.Query<IBaseSource>): Promise<number> {
		return this.container.prisma.base.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<IBaseSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				BaseKeyword: {
					some: {
						keyword: {
							text: {
								contains: fragment,
								mode:     "insensitive",
							},
						},
					},
				}
			})),
		});
	}
}
