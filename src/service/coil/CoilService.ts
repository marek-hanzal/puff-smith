import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilCreate, ICoilService, ICoilServiceCreate} from "@/puff-smith/service/coil/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {RepositoryService} from "@leight-core/server";

export const CoilService = (request: ICoilServiceCreate = ServiceCreate()): ICoilService => {
	const toCreate = async ({wire, wireId, draws, drawIds, ...create}: ICoilCreate) => {
		const _wire = await WireService(request).fetchByReference({wire, wireId});
		drawIds = drawIds || (draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => tag.id) : undefined);
		return {
			...create,
			name: create.name || `${_wire.name} ⌀${Math.round(create.size * 1000) / 1000} ↺${create.wraps}`,
			code: create.code || CodeService().code(),
			wireId: _wire.id,
			CoilDraw: {
				createMany: {
					data: drawIds ? drawIds.map(drawId => ({drawId})) : (await request.prisma.wireDraw.findMany({
						where: {
							wireId,
						},
						include: {
							draw: true,
						}
					})).map(({draw}) => ({
						drawId: draw.id,
					})),
				}
			},
		};
	};

	return {
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
			create: async create => {
				return request.prisma.coil.create({
					data: await toCreate(create),
				});
			},
			onUnique: async create => {
				const $create = await toCreate(create);
				const $coil = await request.prisma.coil.findUnique({
					where: {
						name_wireId: {
							name: $create.name,
							wireId: $create.wireId,
						}
					},
					rejectOnNotFound: true,
				});
				await request.prisma.coilDraw.deleteMany({
					where: {
						coilId: $coil.id,
					},
				});
				return request.prisma.coil.update({
					where: {
						id: $coil.id,
					},
					data: $create,
				});
			},
		}),
	};
};
