import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IWireFiberCreate, IWireService, IWireServiceCreate} from "@/puff-smith/service/wire/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import {boolean} from "boolean";
import YAML from "yaml";

export const WireService = (request: IWireServiceCreate = ServiceCreate()): IWireService => {
	const fiberService = singletonOf(() => FiberService(request));
	const vendorService = singletonOf(() => VendorService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());

	const toMm = (wireFiberCreate: IWireFiberCreate[]) => wireFiberCreate.map(({$fiber, count}) => count * $fiber.mm).reduce((prev, current) => prev + current, 0);
	const toMmRound = (mm: number) => Math.round(mm * 10) / 10;

	return {
		...RepositoryService<IWireService>({
			name: "wire",
			source: request.prisma.wire,
			mapper: async wire => ({
				...wire,
				vendor: await vendorService().toMap(wire.vendorId),
				draws: await tagService().list(request.prisma.tag.findMany({
					where: {
						WireDraw: {
							some: {
								wireId: wire.id,
							},
						},
					},
				})),
				fibers: await Promise.all((await request.prisma.wireFiber.findMany({
					where: {
						wireId: wire.id,
					},
				})).map(async wireFiber => ({
					...wireFiber,
					fiber: await fiberService().toMap(wireFiber.fiberId),
				}))),
			}),
			create: async ({vendor, vendorId, draws, fibers, isTCR, ...wire}) => {
				const wireFiberCreate: IWireFiberCreate[] = await Promise.all((YAML.parse(fibers || "[]") as IWireFiberCreate[]).map(async item => {
					return ({
						...item,
						$fiber: await fiberService().fetchByCode(item.fiber),
					});
				}));
				const mm = toMm(wireFiberCreate);
				return request.prisma.wire.create({
					data: {
						...wire,
						code: wire.code || codeService().code(),
						name: wire.name || wireFiberCreate.map(item => item.fiber).sort().join(", "),
						mm,
						mmToRound: toMmRound(mm),
						vendorId: (await vendorService().fetchByReference({vendor, vendorId})).id,
						isTCR: boolean(isTCR),
						WireFiber: {
							createMany: {
								data: wireFiberCreate.map(item => ({
									fiberId: item.$fiber.id,
									count: item.count,
								})),
							}
						},
						WireDraw: {
							createMany: {
								data: draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : [],
							}
						},
					}
				});
			},
			onUnique: async ({vendor, vendorId, draws, fibers, isTCR, ...wire}) => {
				const $wire = (await request.prisma.wire.findFirst({
					where: {
						OR: [
							{
								name: wire.name,
								vendorId: (await vendorService().fetchByReference({vendor, vendorId})).id,
							},
							{
								code: wire.code,
							}
						],
					},
					rejectOnNotFound: true,
				}));

				await request.prisma.wireFiber.deleteMany({
					where: {
						wireId: $wire.id,
					}
				});
				await request.prisma.wireDraw.deleteMany({
					where: {
						wireId: $wire.id,
					}
				});

				const wireFiberCreate: IWireFiberCreate[] = await Promise.all((YAML.parse(fibers || "[]") as IWireFiberCreate[]).map(async item => {
					return ({
						...item,
						$fiber: await fiberService().fetchByCode(item.fiber),
					});
				}));
				const mm = toMm(wireFiberCreate);
				return request.prisma.wire.update({
					where: {
						id: $wire.id,
					},
					data: {
						...wire,
						mm,
						mmToRound: toMmRound(mm),
						isTCR: boolean(isTCR),
						WireFiber: {
							createMany: {
								data: wireFiberCreate.map(item => ({
									fiberId: item.$fiber.id,
									count: item.count,
								})),
							}
						},
						WireDraw: {
							createMany: {
								data: draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : [],
							}
						},
					},
				});
			},
		}),
		fetchByReference: ({wireId, wire}) => {
			if (!wire && !wireId) {
				throw new Error(`Provide [wire] or [wireId].`);
			}
			return request.prisma.wire.findUnique({
				where: wireId ? {
					id: wireId,
				} : {
					code: wire,
				},
				rejectOnNotFound: true,
			});
		}
	};
};
