import {IFiberService, IFiberServiceCreate} from "@/puff-smith/service/fiber/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const FiberRepository = (request: IFiberServiceCreate): IFiberService => {
	const fiberRepository = singletonOf(() => FiberRepository(request));
	const tagRepository = singletonOf(() => TagRepository(request));

	return {
		...Repository<IFiberService>({
			name: "fiber",
			source: request.prisma.fiber,
			mapper: async fiber => ({
				...fiber,
				material: await tagRepository().toMap(fiber.materialId),
			}),
			create: async ({material, materialId, ...fiber}) => {
				const $material = await tagRepository().fetchTag("material", material, materialId);
				const create = {
					...fiber,
					code: fiber.code || `${$material.code} ${fiber.ga}GA`,
					materialId: $material.id,
					mm: parseFloat(`${fiber.mm}`),
				};
				try {
					return await request.prisma.fiber.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $fiber = (await request.prisma.fiber.findFirst({
							where: {
								OR: [
									{
										ga: create.ga,
										materialId: (await tagRepository().fetchTag("material", material, materialId)).id,
									},
									{
										code: create.code,
									},
								],
							},
							rejectOnNotFound: true,
						}));
						return request.prisma.fiber.update({
							where: {
								id: $fiber.id,
							},
							data: create,
						});
					});
				}
			},
		}),
		fetchByCode: code => request.prisma.fiber.findUnique({
			where: {
				code,
			},
			rejectOnNotFound: true,
		}),
		fetchByCodes: codes => Promise.all(codes.map(async code => await fiberRepository().fetchByCode(code))),
	};
};
