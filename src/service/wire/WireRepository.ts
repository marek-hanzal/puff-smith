import {CodeService} from "@/puff-smith/service/code/CodeService";
import {FiberRepository} from "@/puff-smith/service/fiber/FiberRepository";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {IWireFiberCreate, IWireRepository, IWireRepositoryCreate} from "@/puff-smith/service/wire/interface";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";
import YAML from "yaml";

export const WireRepository = (request: IWireRepositoryCreate): IWireRepository => {
	const fiberRepository = singletonOf(() => FiberRepository(request));
	const vendorRepository = singletonOf(() => VendorRepository(request));
	const tagRepository = singletonOf(() => TagRepository(request));
	const codeService = singletonOf(() => CodeService());

	const toMm = (wireFiberCreate: IWireFiberCreate[]) => wireFiberCreate.map(({$fiber, count}) => count * $fiber.mm).reduce((prev, current) => prev + current, 0);
	const toMmRound = (mm: number) => Math.round(mm * 10) / 10;

	return {
		...Repository<IWireRepository>({
			name: "wire",
			source: request.prisma.wire,
			mapper: async wire => ({
				...wire,
				vendor: await vendorRepository().toMap(wire.vendorId),
				draws: await tagRepository().list(request.prisma.tag.findMany({
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
					fiber: await fiberRepository().toMap(wireFiber.fiberId),
				}))),
			}),
			create: async ({code, name, vendor, vendorId, draws, fibers, isTCR, ...wire}) => {
				const wireFiberCreate: IWireFiberCreate[] = await Promise.all((YAML.parse(fibers || "[]") as IWireFiberCreate[]).map(async item => {
					return ({
						...item,
						$fiber: await fiberRepository().fetchByCode(item.fiber),
					});
				}));
				const mm = toMm(wireFiberCreate);
				const create = {
					...wire,
					code: code || codeService().code(),
					name: name || wireFiberCreate.map(item => item.fiber).sort().join(", "),
					mm,
					mmToRound: toMmRound(mm),
					vendorId: (await vendorRepository().fetchByReference({vendor, vendorId})).id,
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
							data: draws ? (await tagRepository().fetchCodes(draws, "draw")).map(tag => ({
								drawId: tag.id,
							})) : [],
						}
					},
				};
				try {
					return await request.prisma.wire.create({
						data: create
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $wire = (await request.prisma.wire.findFirst({
							where: {
								OR: [
									{
										name: create.name,
										vendorId: (await vendorRepository().fetchByReference({vendor, vendorId})).id,
									},
									{
										code: create.code,
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
						return request.prisma.wire.update({
							where: {
								id: $wire.id,
							},
							data: create,
						});
					});
				}
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
