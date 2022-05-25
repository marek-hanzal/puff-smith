import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilSource} from "@/puff-smith/service/coil/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CoilSource = (): ICoilSource => {
	const wireSource = singletonOf(() => WireSource());
	const tagSource = singletonOf(() => TagSource());
	const codeService = singletonOf(() => CodeService());

	const source: ICoilSource = Source<ICoilSource>({
		name: "coil",
		prisma,
		map: async coil => coil ? ({
			...coil,
			wire: await wireSource().mapper.map(coil.wire),
			draws: await tagSource().mapper.list(Promise.resolve(coil.CoilDraw.map(({draw}) => draw))),
		}) : undefined,
		source: {
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
							data: drawIds ? drawIds.map(drawId => ({drawId})) : (await source.prisma.wireDraw.findMany({
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
					return await source.prisma.coil.create({
						data: create,
						include: {
							wire: true,
							CoilDraw: {
								include: {
									draw: true,
								},
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $coil = await source.prisma.coil.findFirst({
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
						await source.prisma.coilDraw.deleteMany({
							where: {
								coilId: $coil.id,
							},
						});
						return source.prisma.coil.update({
							where: {
								id: $coil.id,
							},
							data: create,
							include: {
								wire: true,
								CoilDraw: {
									include: {
										draw: true,
									},
								},
							},
						});
					});
				}
			},
		}
	});

	return source;
};
