import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilService, ICoilServiceCreate} from "@/puff-smith/service/coil/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {RepositoryService} from "@leight-core/server";

export const CoilService = (request: ICoilServiceCreate = ServiceCreate()): ICoilService => ({
	...RepositoryService<ICoilService>({
		name: "coil",
		source: request.prisma.coil,
		mapper: async coil => ({
			...coil,
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
		create: async ({wire, wireId, draws, drawIds, ...create}) => {
			const _wire = await WireService(request).fetchByReference({wire, wireId});
			const name = create.name || `${_wire.name} ⌀${Math.round(create.size * 1000) / 1000} ↺${create.wraps}`;
			console.log(`\t\t NAME ${name}\n`);
			return request.prisma.coil.create({
				data: {
					name,
					code: create.code || CodeService().code(),
					wireId: _wire.id,
					...create,
				}
			});
		},
	}),
});
