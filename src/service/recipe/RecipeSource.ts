import {Container}       from "@/puff-smith/service/Container";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	IRecipeEntity,
	IRecipeSource
}                        from "@/puff-smith/service/recipe/interface";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {sha256}          from "@/puff-smith/service/utils/sha256";
import {
	IWithIdentity,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/api";
import {
	pageOf,
	withFetch
}                        from "@leight-core/server";
import {merge}           from "@leight-core/utils";

export class RecipeSourceClass extends ContainerSource<IRecipeSource> implements IRecipeSource {
	constructor() {
		super("recipe", prisma);
	}

	async toItem({base, booster, ...recipe}: SourceInfer.Entity<IRecipeSource>): Promise<SourceInfer.Item<IRecipeSource>> {
		return this.container.useBaseSource(async baseSource => {
			return this.container.useBoosterSource(async boosterSource => {
				return {
					...recipe,
					booster:           booster ? await boosterSource.mapper.toItem.map(booster) : null,
					base:              base ? await baseSource.mapper.toItem.map(base) : null,
					nicotine:          recipe.nicotine?.toNumber(),
					nicotineTolerance: recipe.nicotineTolerance?.toNumber(),
				};
			});
		});
	}

	async updateKeywords(recipe: IRecipeEntity): Promise<IRecipeEntity> {
		return this.container.useKeywordSource(async keywordSource => {
			// const $recipe = await this.map(recipe);
			const source: string[] = [
				`${recipe.vg}/${recipe.pg}`,
				...(recipe.nicotine ? [
					`@${recipe.nicotine}mg`,
					`${recipe.vg}/${recipe.pg}@${recipe.nicotine}mg`,
				] : []),
				...(recipe?.booster ? [
					`@${recipe.booster.nicotine}mg`,
					`${recipe.booster.vg}/${recipe.booster.pg}`,
					`${recipe.booster.vg}/${recipe.booster.pg}@${recipe.booster.nicotine}mg`,
				] : []),
				...(recipe?.base ? [
					`${recipe.base.vg}/${recipe.base.pg}`,
				] : []),
			];
			// (await this.container.prisma.translation.findMany({
			// 	where: {
			// 		label: {
			// 			in: $recipe.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// 		},
			// 	}
			// })).map(({text}) => source.push(text));
			await this.container.prisma.recipeKeyword.deleteMany({
				where: {recipeId: recipe.id},
			});
			await this.container.prisma.recipeKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					recipeId:  recipe.id,
					keywordId: (await keyword).id,
				}))),
			});
			return recipe;
		});
	}

	async $create({base, booster, ...recipe}: SourceInfer.Create<IRecipeSource>): Promise<SourceInfer.Entity<IRecipeSource>> {
		return this.container.useBaseSource(async baseSource => {
			return this.container.useBoosterSource(async boosterSource => {
				const hash = sha256(JSON.stringify({base, booster, ...recipe}));
				return this.updateKeywords(await this.container.prisma.recipe.create({
					data:    {
						...recipe,
						hash,
						base:    base ? {
							connect: {
								id: (await baseSource.import(base)).id,
							}
						} : undefined,
						booster: booster ? {
							connect: {
								id: (await boosterSource.import(booster)).id,
							}
						} : undefined,
						user:    {
							connect: {
								id: this.container.user.required(),
							}
						},
					},
					include: {
						base:    true,
						booster: true,
					},
				}));
			});
		});
	}

	async $patch({id, base, booster, ...recipe}: UndefinableOptional<SourceInfer.Create<IRecipeSource>> & IWithIdentity): Promise<SourceInfer.Entity<IRecipeSource>> {
		return this.container.useBaseSource(async baseSource => {
			return this.container.useBoosterSource(async boosterSource => {
				const hash = sha256(JSON.stringify({base, booster, ...recipe}));
				return this.updateKeywords(await this.container.prisma.recipe.update({
					where:   {id},
					data:    {
						...recipe,
						hash,
						base:    base ? {
							connect: {
								id: (await baseSource.import(base)).id,
							}
						} : undefined,
						booster: booster ? {
							connect: {
								id: (await boosterSource.import(booster)).id,
							}
						} : undefined,
					},
					include: {
						base:    true,
						booster: true,
					},
				}));
			});
		});
	}

	async resolveId({base, booster, ...recipe}: SourceInfer.Create<IRecipeSource>): Promise<IWithIdentity> {
		return this.container.prisma.recipe.findFirstOrThrow({
			select: {
				id: true,
			},
			where:  {
				hash: sha256(JSON.stringify({base, booster, ...recipe})),
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IRecipeSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.recipe.findMany({
			where,
			include: {
				base:    true,
				booster: true,
			},
		});
		await this.container.prisma.recipe.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IRecipeSource>> {
		return this.container.prisma.recipe.findUniqueOrThrow({
			where:   {
				id,
			},
			include: {
				base:    true,
				booster: true,
			},
		});
	}

	async $query(query: SourceInfer.Query<IRecipeSource>): Promise<SourceInfer.Entity<IRecipeSource>[]> {
		return this.container.prisma.recipe.findMany({
			where: this.withFilter(query),
			...pageOf(query),
			include: {
				base:    true,
				booster: true,
			},
		});
	}

	async $count(query: SourceInfer.Query<IRecipeSource>): Promise<number> {
		return this.container.prisma.recipe.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<IRecipeSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				RecipeKeyword: {
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

export const RecipeSource     = () => new RecipeSourceClass();
export const withRecipeSource = () => withFetch(async () => Container().useRecipeSource(async t => t), "recipe", "recipeId");
