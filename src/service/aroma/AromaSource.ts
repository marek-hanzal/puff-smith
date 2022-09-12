import {MixtureJob} from "@/puff-smith/jobs/mixture/job";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ClientError, ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {onUnique, pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const AromaSource = () => new AromaSourceClass();

export class AromaSourceClass extends ContainerSource<IAromaSource> {
	constructor() {
		super("aroma", prisma);
	}

	async map(aroma: ISourceEntity<IAromaSource>): Promise<ISourceItem<IAromaSource>> {
		return {
			...aroma,
			vendor: await this.vendorSource.map(aroma.vendor),
			tastes: await this.tagSource.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
			tasteIds: aroma.AromaTaste.map(({taste}) => taste.id),
		};
	}

	async $create({vendor, vendorId, tastes, tasteIds, code, withMixtures, withInventory = false, ...aroma}: ISourceCreate<IAromaSource>): Promise<ISourceEntity<IAromaSource>> {
		const $canUpdate = this.user.hasAny([
			"*",
			"site.root",
			"aroma.patch",
		]);
		const $create = async () => {
			const create = {
				...aroma,
				code: code || this.codeService.code(),
				name: `${aroma.name}`,
				vendor: {
					connect: {
						name: vendor,
						id: vendorId,
					}
				},
				AromaTaste: {
					createMany: {
						data: (await this.tagSource.fetchByCodes(tasteIds || tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})),
					}
				},
			};
			try {
				return await this.prisma.aroma.create({
					data: {
						...create,
						user: this.user.optional() ? {
							connect: {
								id: this.user.optional(),
							}
						} : undefined,
					},
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							}
						}
					},
				});
			} catch (e) {
				return onUnique(e, async () => {
					if (!$canUpdate) {
						throw new ClientError("Aroma already exists.", 409);
					}
					const $aroma = await this.prisma.aroma.findFirstOrThrow({
						where: {
							OR: [
								{
									name: `${create.name}`,
									vendor: {
										name: vendor,
									}
								},
								{
									code: create.code,
								}
							],
						},
					});
					await this.prisma.aromaTaste.deleteMany({
						where: {
							aromaId: $aroma.id,
						}
					});
					return this.prisma.aroma.update({
						where: {
							id: $aroma.id,
						},
						data: {
							...create,
							AromaTaste: {
								createMany: {
									data: (await this.tagSource.fetchByCodes(tasteIds || tastes, "taste")).map(tag => ({
										tasteId: tag.id,
									})),
								}
							},
						},
						include: {
							vendor: true,
							AromaTaste: {
								orderBy: {taste: {sort: "asc"}},
								include: {
									taste: true,
								}
							}
						},
					});
				});
			}
		};
		const $aroma = await $create();
		withInventory && await this.prisma.aromaInventory.createMany({
			data: [{
				code: this.codeService.code(),
				aromaId: $aroma.id,
				userId: this.user.required(),
			}],
			skipDuplicates: true,
		});
		return $aroma;
	}

	async $patch({vendor, vendorId, tastes, tasteIds, withMixtures, ...patch}: UndefinableOptional<ISourceCreate<IAromaSource>> & IWithIdentity): Promise<ISourceEntity<IAromaSource>> {
		await this.prisma.aromaTaste.deleteMany({
			where: {
				aromaId: patch.id,
			}
		});
		const aroma = this.prisma.aroma.update({
			where: {id: patch.id},
			data: {
				...patch,
				vendor: {
					connect: {
						name: vendor,
						id: vendorId,
					}
				},
				AromaTaste: {
					createMany: {
						data: tasteIds?.map(id => ({
							tasteId: id,
						})) || [],
					}
				},
			},
			include: {
				vendor: true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
		});
		withMixtures && await MixtureJob.async({
			aromaId: patch.id,
		}, this.user.required());
		return aroma;
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IAromaSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.aroma.findMany({
			where,
			include: {
				vendor: true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
		});
		await this.prisma.aroma.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<ISourceEntity<IAromaSource>> {
		return this.prisma.aroma.findUniqueOrThrow({
			where: {id},
			include: {
				vendor: true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
		});
	}

	async $query(query: ISourceQuery<IAromaSource>): Promise<ISourceEntity<IAromaSource>[]> {
		return this.prisma.aroma.findMany({
			where: this.withFilter(query),
			include: {
				vendor: true,
				AromaTaste: {
					orderBy: {taste: {sort: "asc"}},
					include: {
						taste: true,
					}
				}
			},
			...pageOf(query),
		});
	}

	async $count(query: ISourceQuery<IAromaSource>): Promise<number> {
		return this.prisma.aroma.count({
			where: this.withFilter(query),
		});
	}

	async $clearCache(): Promise<any> {
		await this.aromaMarketSource.clearCache();
	}

	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<IAromaSource>) {
		return merge(filter || {}, {
			OR: [
				{
					name: {
						contains: fulltext,
						mode: "insensitive",
					}
				},
				{
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				},
			],
		});
	}
}
