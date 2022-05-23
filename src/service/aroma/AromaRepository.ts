import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaCreate, IAromaRepository, IAromaSource} from "@/puff-smith/service/aroma/interface";
import {memoTastes} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {Repository, uniqueOf} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaRepository = (): IAromaRepository => {
	const source = AromaSource();
	const codeService = singletonOf(() => CodeService());
	const tagSource = singletonOf(() => TagRepository());

	return Repository<IAromaCreate, IAromaSource, IAromaRepository>({
		source,
		create: async ({vendor, tastes, code, ...aroma}) => {
			const create = {
				...aroma,
				code: code || codeService().code(),
				name: `${aroma.name}`,
				vendor: {
					connect: {
						name: vendor,
					}
				},
				AromaTaste: {
					createMany: {
						data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			};
			try {
				return await request.prisma.aroma.create({
					data: create,
				});
			} catch (e) {
				return uniqueOf(e, async () => {
					const $aroma = await request.prisma.aroma.findFirst({
						where: {
							OR: [
								{
									name: `${create.name}`,
									vendor: {
										name: vendor,
									}
								},
								{
									code: create.code,
								}
							],
						},
						rejectOnNotFound: true,
					});
					await request.prisma.aromaTaste.deleteMany({
						where: {
							aromaId: $aroma.id,
						}
					});
					await memoTastes.delete($aroma.id, undefined);
					return request.prisma.aroma.update({
						where: {
							id: $aroma.id,
						},
						data: {
							...create,
							AromaTaste: {
								createMany: {
									data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
										tasteId: tag.id,
									})) : [],
								}
							},
						},
					});
				});
			}
		}
	});
};
