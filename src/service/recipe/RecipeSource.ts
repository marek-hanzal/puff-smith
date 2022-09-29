import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IRecipeEntity, IRecipeSource} from "@/puff-smith/service/recipe/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const RecipeSource = () => new RecipeSourceClass();

export class RecipeSourceClass extends ContainerSource<IRecipeSource> implements IRecipeSource {
	constructor() {
		super("recipe", prisma);
	}

	async map({base, booster, ...recipe}: ISourceEntity<IRecipeSource>): Promise<ISourceItem<IRecipeSource>> {
		return this.useBaseSource(async baseSource => {
			return this.useBoosterSource(async boosterSource => {
				return {
					...recipe,
					booster: booster ? await boosterSource.map(booster) : null,
					base: base ? await baseSource.map(base) : null,
					nicotine: recipe.nicotine?.toNumber(),
					nicotineTolerance: recipe.nicotineTolerance?.toNumber(),
				};
			});
		});
	}

	async updateKeywords(recipe: IRecipeEntity): Promise<IRecipeEntity> {
		return this.useKeywordSource(async keywordSource => {
			// const $recipe = await this.map(recipe);
			const source: string[] = [
				`VG-${recipe.vg}`,
				`PG-${recipe.pg}`,
				...(recipe.nicotine ? [`@${recipe.nicotine}mg`] : []),
				...(recipe?.booster ? [
					`VG-${recipe.booster.vg}`,
					`PG-${recipe.booster.pg}`,
					`@${recipe.booster.nicotine}mg`,
				] : []),
				...(recipe?.base ? [
					`VG-${recipe.base.vg}`,
					`PG-${recipe.base.pg}`,
				] : []),
			];
			// (await this.prisma.translation.findMany({
			// 	where: {
			// 		label: {
			// 			in: $recipe.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// 		},
			// 	}
			// })).map(({text}) => source.push(text));
			await this.prisma.recipeKeyword.deleteMany({
				where: {recipeId: recipe.id},
			});
			await this.prisma.recipeKeyword.createMany({
				data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
					recipeId: recipe.id,
					keywordId: (await keyword).id,
				}))),
			});
			return recipe;
		});
	}

	async $create({base, booster, ...recipe}: ISourceCreate<IRecipeSource>): Promise<ISourceEntity<IRecipeSource>> {
		return this.useBaseSource(async baseSource => {
			return this.useBoosterSource(async boosterSource => {
				const hash = sha256(JSON.stringify({base, booster, ...recipe}));
				return this.updateKeywords(await this.prisma.recipe.create({
					data: {
						...recipe,
						hash,
						base: base ? {
							connect: {
								id: (await baseSource.import(base)).id,
							}
						} : undefined,
						booster: booster ? {
							connect: {
								id: (await boosterSource.import(booster)).id,
							}
						} : undefined,
						user: {
							connect: {
								id: this.user.required(),
							}
						},
					},
					include: {
						base: true,
						booster: true,
					},
				}));
			});
		});
	}

	async $patch({id, base, booster, ...recipe}: UndefinableOptional<ISourceCreate<IRecipeSource>> & IWithIdentity): Promise<ISourceEntity<IRecipeSource>> {
		return this.useBaseSource(async baseSource => {
			return this.useBoosterSource(async boosterSource => {
				const hash = sha256(JSON.stringify({base, booster, ...recipe}));
				return this.updateKeywords(await this.prisma.recipe.update({
					where: {id},
					data: {
						...recipe,
						hash,
						base: base ? {
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
						base: true,
						booster: true,
					},
				}));
			});
		});
	}

	async createToId({base, booster, ...recipe}: ISourceCreate<IRecipeSource>): Promise<{ id: string }> {
		return this.prisma.recipe.findFirstOrThrow({
			select: {
				id: true,
			},
			where: {
				hash: sha256(JSON.stringify({base, booster, ...recipe})),
			},
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IRecipeSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.recipe.findMany({
			where,
			include: {
				base: true,
				booster: true,
			},
		});
		await this.prisma.recipe.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<ISourceEntity<IRecipeSource>> {
		return this.prisma.recipe.findUniqueOrThrow({
			where: {
				id,
			},
			include: {
				base: true,
				booster: true,
			},
		});
	}

	async $query(query: ISourceQuery<IRecipeSource>): Promise<ISourceEntity<IRecipeSource>[]> {
		return this.prisma.recipe.findMany({
			where: this.withFilter(query),
			...pageOf(query),
			include: {
				base: true,
				booster: true,
			},
		});
	}

	async $count(query: ISourceQuery<IRecipeSource>): Promise<number> {
		return this.prisma.recipe.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<IRecipeSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				RecipeKeyword: {
					some: {
						keyword: {
							text: {
								contains: fragment,
								mode: "insensitive",
							},
						},
					},
				}
			})),
		});
	}
}
