import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilSource, ICoilSourceCreate} from "@/puff-smith/service/coil/interface";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CoilSource = (request: ICoilSourceCreate): ICoilSource => {
	const wireSource = singletonOf(() => WireSource(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());

	return {
		...Source<ICoilSource>({
			name: "coil",
			source: request.prisma.coil,
			mapper: async coil => ({
				...coil,
				wire: await wireSource().toMap(coil.wireId),
				draws: await tagSource().list(request.prisma.tag.findMany({
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
				const $wire = await wireSource().fetchByReference({wire, wireId});
				drawIds = drawIds || (draws ? (await tagSource().fetchCodes(draws, "draw")).map(tag => tag.id) : undefined);
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
