import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureJobSource} from "@/puff-smith/service/mixture/job/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureJobSource = (): IMixtureJobSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const aromaSource = singletonOf(() => AromaSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IMixtureJobSource = Source<IMixtureJobSource>({
		name: "mixture",
		prisma,
		map: async mixture => mixture ? {
			...mixture,
		} : null,
		source: {
			create: async ({code, draws, ...mixture}) => {
				const vgToRound = Math.round(mixture.vg * 0.1) / 0.1;
				const $aroma = await aromaSource().get(mixture.aromaId);
				const create = {
					...mixture,
					code: code || codeService().code(),
					vendorId: $aroma.vendorId,
					hash: sha256(`${mixture.aromaId}-${mixture.baseId || null}-${mixture.boosterId || null}-${mixture.nicotine}`),
					vgToRound,
					pgToRound: 100 - vgToRound,
					nicotineToRound: Math.round(mixture.nicotine || 0),
					MixtureDraw: {
						createMany: {
							data: draws ? (await tagSource().fetchByCodes(draws, "draw")).map(tag => ({
								drawId: tag.id,
							})) : [],
						}
					},
				};
				try {
					return await source.prisma.mixture.create({
						data: create,
						select: {
							id: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $mixture = await source.prisma.mixture.findUnique({
							where: {
								hash: create.hash,
							},
							rejectOnNotFound: true,
						});
						await source.prisma.mixtureDraw.deleteMany({
							where: {
								mixtureId: $mixture.id,
							}
						});
						return source.prisma.mixture.update({
							where: {
								id: $mixture.id,
							},
							data: create,
							select: {
								id: true,
							},
						});
					});
				}
			},
		}
	});

	return source;
};
