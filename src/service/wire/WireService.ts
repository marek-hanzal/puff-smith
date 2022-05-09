import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IWireFiberCreate, IWireService, IWireServiceCreate} from "@/puff-smith/service/wire/interface";
import {RepositoryService} from "@leight-core/server";
import {boolean} from "boolean";
import YAML from "yaml";

export const WireService = (request: IWireServiceCreate = ServiceCreate()): IWireService => RepositoryService<IWireService>({
	name: "wire",
	source: request.prisma.wire,
	mapper: async wire => ({
		...wire,
	}),
	create: async ({vendor, vendorId, draws, fibers, isTCR, ...create}) => {
		const fiberService = FiberService(request);
		const wireFiberCreate: IWireFiberCreate[] = await Promise.all((YAML.parse(fibers || "[]") as IWireFiberCreate[]).map(async item => {
			return ({
				...item,
				_fiber: await fiberService.fetchByCode(item.fiber),
			});
		}));
		const mm = wireFiberCreate.map(({_fiber, count}) => count * _fiber.mm.toNumber()).reduce((prev, current) => prev + current, 0);
		return request.prisma.wire.create({
			data: {
				code: create.code || CodeService().code(),
				name: create.name || wireFiberCreate.map(item => item.fiber).sort().join(", "),
				mm,
				mmToRound: Math.round(mm * 10) / 10,
				vendorId: (await VendorService(request).fetchByReference({vendor, vendorId})).id,
				isTCR: boolean(isTCR),
				WireFiber: {
					createMany: {
						data: wireFiberCreate.map(item => ({
							fiberId: item._fiber.id,
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
				...create,
			}
		});
	},
	onUnique: async ({vendor, vendorId, ...create}) => {
		const _wire = (await request.prisma.wire.findFirst({
			where: {
				vendorId: (await VendorService(request).fetchByReference({vendor, vendorId})).id,
			},
			rejectOnNotFound: true,
		}));

		return request.prisma.wire.update({
			where: {
				id: _wire.id,
			},
			data: create,
		});
	},
});
