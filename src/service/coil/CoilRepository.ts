import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilRepository, ICoilRepositoryCreate} from "@/puff-smith/service/coil/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CoilRepository = (request: ICoilRepositoryCreate): ICoilRepository => {
	const wireRepository = singletonOf(() => WireRepository(request));
	const tagRepository = singletonOf(() => TagRepository(request));
	const codeService = singletonOf(() => CodeService());

	return {
		...Repository<ICoilRepository>({
			name: "coil",
			source: request.prisma.coil,
			mapper: async coil => ({
				...coil,
				wire: await wireRepository().toMap(coil.wireId),
				draws: await tagRepository().list(request.prisma.tag.findMany({
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
			create: async ({code, name, draws, drawIds, wire, wireId, ...coil}) => {
				const $wire = await wireRepository().fetchByReference({wire, wireId});
				drawIds = drawIds || (draws ? (await tagRepository().fetchCodes(draws, "draw")).map(tag => tag.id) : undefined);
				const create = {
					...coil,
					code: code || codeService().code(),
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
				try {
					return await request.prisma.coil.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $coil = await request.prisma.coil.findFirst({
							where: {
								OR: [
									{
										name: create.name,
										wireId: create.wireId,
									},
									{
										code: create.code,
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
							data: create,
						});
					});
				}
			},
		}),
	};
};
