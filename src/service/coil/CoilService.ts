import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilCreate, ICoilService, ICoilServiceCreate} from "@/puff-smith/service/coil/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CoilService = (request: ICoilServiceCreate = ServiceCreate()): ICoilService => {
	const wireService = singletonOf(() => WireService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());

	const toCreate = async ({wire, wireId, draws, drawIds, name, code, ...coil}: ICoilCreate) => {
		const $wire = await wireService().fetchByReference({wire, wireId});
		drawIds = drawIds || (draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => tag.id) : undefined);
		return {
			...coil,
			name: name || `${$wire.name} ⌀${Math.round(coil.size * 1000) / 1000} ↺${coil.wraps}`,
			wireId: $wire.id,
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
				wire: await wireService().toMap(coil.wireId),
				draws: await tagService().list(request.prisma.tag.findMany({
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
			create: async ({code, ...coil}) => {
				return request.prisma.coil.create({
					data: {
						...await toCreate(coil),
						code: code || codeService().code(),
					},
				});
			},
			onUnique: async coil => {
				const $create = await toCreate(coil);
				const $coil = await request.prisma.coil.findFirst({
					where: {
						OR: [
							{
								name: $create.name,
								wireId: $create.wireId,
							},
							{
								code: coil.code,
							}
						],
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
					data: {
						...$create,
						code: coil.code,
					},
				});
			},
		}),
	};
};
