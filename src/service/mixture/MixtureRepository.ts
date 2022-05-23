import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureRepository} from "@/puff-smith/service/mixture/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureRepository = (): IMixtureRepository => {
	const tagRepository = singletonOf(() => TagRepository());
	const aromaRepository = singletonOf(() => AromaRepository());
	const boosterRepository = singletonOf(() => BoosterRepository());
	const baseRepository = singletonOf(() => BaseRepository());
	const codeService = singletonOf(() => CodeService());


	return Repository({
		source: MixtureSource(),
		create: async ({code, draws, ...mixture}) => {
			const vgToRound = Math.round(mixture.vg * 0.1) / 0.1;
			const $aroma = await aromaSource().fetch(mixture.aromaId);
			const create = {
				...mixture,
				code: code || codeService().code(),
				vendorId: $aroma.vendorId,
				hash: `${mixture.aromaId}-${mixture.baseId || null}-${mixture.boosterId || null}-${mixture.nicotine}`,
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
				return await request.prisma.mixture.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
					const $mixture = await request.prisma.mixture.findUnique({
						where: {
							hash: create.hash,
						},
						rejectOnNotFound: true,
					});
					await request.prisma.mixtureDraw.deleteMany({
						where: {
							mixtureId: $mixture.id,
						}
					});
					return request.prisma.mixture.update({
						where: {
							id: $mixture.id,
						},
						data: create,
					});
				});
			}
		},
	});
};
