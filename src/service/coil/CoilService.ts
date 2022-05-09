import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilService, ICoilServiceCreate} from "@/puff-smith/service/coil/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {RepositoryService} from "@leight-core/server";

export const CoilService = (request: ICoilServiceCreate = ServiceCreate()): ICoilService => ({
	...RepositoryService<ICoilService>({
		name: "coil",
		source: request.prisma.coil,
		mapper: async coil => ({
			...coil,
			vendor: coil.vendorId ? await VendorService(request).toMap(coil.vendorId) : null,
			wire: await WireService(request).toMap(coil.wireId),
			draws: await TagService(request).list(request.prisma.tag.findMany({
				where: {
					CoilDraw: {
						some: {
							coilId: coil.id,
						}
					}
				},
				orderBy: {
					sort: "asc",
				}
			})),
		}),
		create: async ({vendor, vendorId, wire, wireId, draws, drawIds, ...create}) => {
			const _vendor = await VendorService(request).fetchByReferenceOptional({vendor, vendorId});
			const _wire = await WireService(request).fetchByReference({wire, wireId});
			return request.prisma.coil.create({
				data: {
					name: create.name || `${_wire.name} ⌀${Math.ceil(create.size)} ↺${create.wraps}`,
					code: create.code || CodeService().code(),
					vendorId: _vendor?.id,
					wireId: _wire.id,
					...create,
				}
			});
		},
	}),
});
