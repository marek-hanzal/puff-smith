import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICoilSource} from "@/puff-smith/service/coil/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CoilSource = (): ICoilSource => {
	const wireSource = singletonOf(() => WireSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ICoilSource = Source<ICoilSource>({
		name: "coil",
		prisma,
		map: async coil => {
			if (!coil) {
				return;
			}
			const {CoilDraw, ...$coil} = coil;
			return {
				...$coil,
				size: coil.size.toNumber(),
				wire: await wireSource().mapper.map(coil.wire),
				draws: await tagSource().mapper.list(Promise.resolve(CoilDraw.map(({draw}) => draw))),
			};
		},
		source: {
			get: async id => source.prisma.coil.findUnique({
				where: {id},
				include: {
					wire: {
						include: {
							vendor: true,
							WireDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								},
							},
							WireFiber: {
								include: {
									fiber: {
										include: {
											material: true,
										}
									}
								}
							}
						},
					},
					CoilDraw: {
						include: {
							draw: true,
						},
					},
				},
				rejectOnNotFound: true,
			}),
			create: async ({code, name, draws, drawIds, wire, wireId, ...coil}) => {
				const $wire = await wireSource().fetchByReference({wire, wireId});
				const $drawIds = (await tagSource().fetchByCodes(drawIds || draws, "draw")).map(tag => tag.id);
				let $name = [$wire.name];
				if ($wire.mmToRound > 0) {
					$name.push(`⌀${$wire.mmToRound}mm`);
				}
				$name = $name.concat([`o${Math.round(coil.size * 1000) / 1000}⌀`, `x${coil.wraps}↺`]);
				const create = {
					...coil,
					code: code || codeService().code(),
					name: name || $name.join(" "),
					wireId: $wire.id,
					CoilDraw: {
						createMany: {
							data: $drawIds.length > 0 ? $drawIds.map(drawId => ({drawId})) : (await source.prisma.wireDraw.findMany({
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
							wire: {
								include: {
									vendor: true,
									WireDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										},
									},
									WireFiber: {
										include: {
											fiber: {
												include: {
													material: true,
												}
											}
										}
									}
								},
							},
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
								wire: {
									include: {
										vendor: true,
										WireDraw: {
											orderBy: {draw: {sort: "asc"}},
											include: {
												draw: true,
											},
										},
										WireFiber: {
											include: {
												fiber: {
													include: {
														material: true,
													}
												}
											}
										}
									},
								},
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
