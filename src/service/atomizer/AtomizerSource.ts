import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {ClientError} from "@leight-core/api";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";

export const AtomizerSource = (): IAtomizerSource => {
	const userSource = singletonOf(() => UserSource().ofSource(source));
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IAtomizerSource = Source<IAtomizerSource>({
		name: "atomizer",
		prisma,
		map: async atomizer => atomizer ? {
			...atomizer,
			vendor: await vendorSource().mapper.map(atomizer.vendor),
			coilMin: atomizer.coilMin?.toNumber() || null,
			coilMax: atomizer.coilMax?.toNumber() || null,
			wrapsMin: atomizer.wrapsMin || null,
			wrapsMax: atomizer.wrapsMax || null,
			draws: await tagSource().mapper.list(Promise.resolve(atomizer.AtomizerDraw.map(({draw}) => draw))),
			drawIds: atomizer.AtomizerDraw.map(({draw}) => draw.id),
			user: await userSource().map(atomizer.user) || null,
		} : null,
		source: {
			get: async id => source.prisma.atomizer.findUnique({
				where: {id},
				include: {
					vendor: true,
					user: true,
					AtomizerDraw: {
						orderBy: {draw: {sort: "asc"}},
						include: {
							draw: true,
						}
					}
				},
				rejectOnNotFound: true,
			}),
			create: async ({draws, type, typeId, vendor, vendorId, drawIds, code, withInventory = false, ...atomizer}) => {
				const $canUpdate = source.user.hasAny([
					"*",
					`${source.name}.patch`,
				]);
				const $create = async () => {
					const create = {
						...atomizer,
						code: code || codeService().code(),
						dualCoil: boolean(atomizer?.dualCoil),
						squonk: boolean(atomizer?.squonk),
						isHybrid: boolean(atomizer?.isHybrid),
						cost: atomizer.cost ? parseFloat(atomizer.cost) : undefined,
						vendor: {
							connect: {
								id: vendorId,
								name: vendor,
							}
						},
						type: {
							connect: {
								id: typeId,
								code_group: type ? {
									code: `${type}`,
									group: "atomizer-type",
								} : undefined,
							}
						},
						AtomizerDraw: {
							createMany: {
								data: (draws ? (await tagSource().fetchByCodes(draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : []).concat(drawIds?.map(id => ({drawId: id})) || []),
							}
						},
					};
					try {
						return await source.prisma.atomizer.create({
							data: {
								...create,
								user: source.user.optional() ? {
									connect: {
										id: source.user.optional(),
									}
								} : undefined,
							},
							include: {
								user: true,
								vendor: true,
								AtomizerDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									}
								}
							},
						});
					} catch (e) {
						return onUnique(e, async () => {
							if (!$canUpdate) {
								throw new ClientError("Atomizer already exists.", 409);
							}
							const $atomizer = (await source.prisma.atomizer.findFirst({
								where: {
									OR: [
										{
											name: create.name,
											vendor: {
												name: vendor,
											},
										},
										{
											code: create.code,
										}
									]
								},
								rejectOnNotFound: true,
							}));
							await source.prisma.atomizerDraw.deleteMany({
								where: {
									atomizerId: $atomizer.id,
								}
							});
							return source.prisma.atomizer.update({
								where: {
									id: $atomizer.id,
								},
								data: create,
								include: {
									vendor: true,
									user: true,
									AtomizerDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								},
							});
						});
					}
				};
				const $atomizer = await $create();
				withInventory && await source.prisma.atomizerInventory.create({
					data: {
						code: codeService().code(),
						atomizerId: $atomizer.id,
						userId: source.user.required(),
					}
				});
				return $atomizer;
			},
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.atomizer.findMany({
					where,
					include: {
						user: true,
						vendor: true,
						AtomizerDraw: {
							orderBy: {draw: {sort: "asc"}},
							include: {
								draw: true,
							}
						}
					},
				});
				await prisma.atomizer.deleteMany({
					where,
				});
				return items;
			}
		}
	});

	return source;
};
