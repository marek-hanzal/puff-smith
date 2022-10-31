import {
    IBoosterEntity,
    IBoosterSource
}                        from "@/puff-smith/service/booster/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {sha256}          from "@/puff-smith/service/utils/sha256";
import {
    IWithIdentity,
    merge,
    pageOf,
    SourceInfer,
    UndefinableOptional
}                        from "@leight-core/viv";

export const BoosterSource = () => new BoosterSourceClass();

export class BoosterSourceClass extends ContainerSource<IBoosterSource> implements IBoosterSource {
	constructor() {
		super("booster");
	}

	async toItem(booster: SourceInfer.Entity<IBoosterSource>): Promise<SourceInfer.Item<IBoosterSource>> {
		return {
			...booster,
			nicotine: booster.nicotine.toNumber(),
		};
	}

	async updateKeywords(booster: IBoosterEntity): Promise<IBoosterEntity> {
		return booster;
		// return this.container.useKeywordSource(async keywordSource => {
		// 	const $booster = await this.map(booster);
		// const source: string[] = [
		// 	$booster.code,
		// 	$booster.vendor.name,
		// 	$booster.name,
		// 	...$booster.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// ];
		// (await this.container.prisma.translation.findMany({
		// 	where: {
		// 		label: {
		// 			in: $booster.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
		// 		},
		// 	}
		// })).map(({text}) => source.push(text));
		// await this.container.prisma.boosterKeyword.deleteMany({
		// 	where: {boosterId: booster.id},
		// });
		// await this.container.prisma.boosterKeyword.createMany({
		// 	data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
		// 		boosterId: booster.id,
		// 		keywordId: (await keyword).id,
		// 	}))),
		// });
		// return booster;
		// });
	}

	async $create(booster: SourceInfer.Create<IBoosterSource>): Promise<SourceInfer.Entity<IBoosterSource>> {
		return this.updateKeywords(await this.container.prisma.booster.create({
			data: {
				...booster,
				hash: sha256(JSON.stringify(booster)),
			},
		}));
	}

	async $patch({id, ...booster}: UndefinableOptional<SourceInfer.Create<IBoosterSource>> & IWithIdentity): Promise<SourceInfer.Entity<IBoosterSource>> {
		return this.updateKeywords(await this.container.prisma.booster.update({
			where: {id},
			data:  booster,
		}));
	}

	async toImport(entity: SourceInfer.Entity<IBoosterSource>): Promise<SourceInfer.Create<IBoosterSource> | undefined> {
		return {
			vg:       entity.vg,
			pg:       entity.vg,
			nicotine: entity.nicotine,
			volume:   entity.volume,
		};
	}

	async resolveId(booster: SourceInfer.Create<IBoosterSource>): Promise<IWithIdentity> {
		return this.container.prisma.booster.findFirstOrThrow({
			select: {
				id: true,
			},
			where:  {
				hash: sha256(JSON.stringify(booster)),
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IBoosterSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.booster.findMany({
			where,
		});
		await this.container.prisma.booster.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IBoosterSource>> {
		return this.container.prisma.booster.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async $query(query: SourceInfer.Query<IBoosterSource>): Promise<SourceInfer.Entity<IBoosterSource>[]> {
		return this.container.prisma.booster.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: SourceInfer.Query<IBoosterSource>): Promise<number> {
		return this.container.prisma.booster.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<IBoosterSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				BoosterKeyword: {
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