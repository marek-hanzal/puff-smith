import {CodeService} from "@/puff-smith/service/code/CodeService";
import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {IWireFiberCreate, IWireSource, IWireSourceCreate} from "@/puff-smith/service/wire/interface";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";
import YAML from "yaml";

export const WireSource = (request: IWireSourceCreate): IWireSource => {
	const fiberSource = singletonOf(() => FiberSource(request));
	const vendorSource = singletonOf(() => VendorRepository(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());

	const toMm = (wireFiberCreate: IWireFiberCreate[]) => wireFiberCreate.map(({$fiber, count}) => count * $fiber.mm).reduce((prev, current) => prev + current, 0);
	const toMmRound = (mm: number) => Math.round(mm * 10) / 10;

	return {
		...Source<IWireSource>({
			name: "wire",
			source: request.prisma.wire,
			mapper: async wire => ({
				...wire,
				vendor: await vendorSource().toMap(wire.vendorId),
				draws: await tagSource().list(request.prisma.tag.findMany({
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
					fiber: await fiberSource().toMap(wireFiber.fiberId),
				}))),
			}),
			create: async ({code, name, vendor, vendorId, draws, fibers, isTCR, ...wire}) => {
				const wireFiberCreate: IWireFiberCreate[] = await Promise.all((YAML.parse(fibers || "[]") as IWireFiberCreate[]).map(async item => {
					return ({
						...item,
						$fiber: await fiberSource().fetchByCode(item.fiber),
					});
				}));
				const mm = toMm(wireFiberCreate);
				const create = {
					...wire,
					code: code || codeService().code(),
					name: name || wireFiberCreate.map(item => item.fiber).sort().join(", "),
					mm,
					mmToRound: toMmRound(mm),
					vendorId: (await vendorSource().fetchByReference({vendor, vendorId})).id,
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
							data: draws ? (await tagSource().fetchCodes(draws, "draw")).map(tag => ({
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
										vendorId: (await vendorSource().fetchByReference({vendor, vendorId})).id,
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
