import {CodeService} from "@/puff-smith/service/code/CodeService";
import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {WireFiberSource} from "@/puff-smith/service/wire/fiber/WireFiberSource";
import {IWireFiberCreate, IWireSource} from "@/puff-smith/service/wire/interface";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";
import YAML from "yaml";

export const WireSource = (): IWireSource => {
	const fiberSource = singletonOf(() => FiberSource().ofSource(source));
	const wireFiberSource = singletonOf(() => WireFiberSource().ofSource(source));
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const toMm = (wireFiberCreate: IWireFiberCreate[]) => wireFiberCreate.map(({$fiber, count}) => count * $fiber.mm).reduce((prev, current) => prev + current, 0);
	const toMmRound = (mm: number) => Math.round(mm * 10) / 10;

	const source: IWireSource = Source<IWireSource>({
		name: "wire",
		prisma,
		map: async wire => ({
			id: wire.id,
			name: wire.name,
			code: wire.code,
			vendorId: wire.vendorId,
			isTCR: wire.isTCR,
			mm: wire.mm,
			mmToRound: wire.mmToRound,
			cost: wire.cost,
			vendor: await vendorSource().map(wire.vendor),
			draws: await tagSource().list(Promise.resolve(wire.WireDraw.map(({draw}) => draw))),
			fibers: await wireFiberSource().list(Promise.resolve(wire.WireFiber)),
		}),
		source: {
			get: async id => source.prisma.wire.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
					WireDraw: {
						include: {
							draw: true,
						},
					},
					WireFiber: {
						include: {
							fiber: {
								include: {
									material: true,
								}
							},
						},
					},
				},
			}),
			create: async ({code, name, vendor, vendorId, draws, fiberId, fibers, withFibers = [], isTCR, withInventory = false, ...wire}) => {
				const $create = async () => {
					const $withFibers: IWireFiberCreate[] = await Promise.all(withFibers.concat(fiberId ? [{count: 1, fiber: fiberId}] : [], YAML.parse(fibers || "[]")).map(async item => {
						return ({
							...item,
							$fiber: await fiberSource().fetchByCode(item.fiber),
						});
					}));
					const mm = toMm($withFibers);
					const create = {
						...wire,
						code: code || codeService().code(),
						name: name || $withFibers.map(item => item.$fiber.code).sort().join(", "),
						mm,
						mmToRound: toMmRound(mm),
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							},
						},
						isTCR: boolean(isTCR),
						WireFiber: {
							createMany: {
								data: $withFibers.map(item => ({
									fiberId: item.$fiber.id,
									count: item.count,
								})),
							}
						},
						WireDraw: {
							createMany: {
								data: (await tagSource().fetchByCodes(draws, "draw")).map(tag => ({
									drawId: tag.id,
								})),
							}
						},
					};
					try {
						return await source.prisma.wire.create({
							data: create,
							include: {
								vendor: true,
								WireDraw: {
									include: {
										draw: true,
									},
								},
								WireFiber: {
									include: {
										fiber: {
											include: {
												material: true,
											}
										},
									},
								},
							},
						});
					} catch (e) {
						return onUnique(e, async () => {
							const $wire = (await source.prisma.wire.findFirstOrThrow({
								where: {
									OR: [
										{
											name: create.name,
											vendorId: (await vendorSource().fetchByReference({vendor, vendorId})).id,
										},
										{
											code: create.code,
										}
									],
								},
							}));

							await source.prisma.wireFiber.deleteMany({
								where: {
									wireId: $wire.id,
								}
							});
							await source.prisma.wireDraw.deleteMany({
								where: {
									wireId: $wire.id,
								}
							});
							return source.prisma.wire.update({
								where: {
									id: $wire.id,
								},
								data: create,
								include: {
									vendor: true,
									WireDraw: {
										include: {
											draw: true,
										},
									},
									WireFiber: {
										include: {
											fiber: {
												include: {
													material: true,
												}
											},
										},
									},
								},
							});
						});
					}
				};
				const $wire = await $create();
				withInventory && await source.prisma.wireInventory.createMany({
					data: [
						{
							code: codeService().code(),
							wireId: $wire.id,
							userId: source.user.required(),
						}
					],
					skipDuplicates: true,
				});
				return $wire;
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.wire.findMany({
						where,
						include: {
							vendor: true,
							WireDraw: {
								include: {
									draw: true,
								},
							},
							WireFiber: {
								include: {
									fiber: {
										include: {
											material: true,
										}
									},
								},
							},
						},
					});
					await prisma.wire.deleteMany({
						where,
					});
					return items;
				});
			},
		},
		fetchByReference: ({wireId, wire}) => {
			if (!wire && !wireId) {
				throw new Error(`Provide [wire] or [wireId].`);
			}
			return source.prisma.wire.findUniqueOrThrow({
				where: wireId ? {
					id: wireId,
				} : {
					code: wire,
				},
			});
		}
	});

	return source;
};
