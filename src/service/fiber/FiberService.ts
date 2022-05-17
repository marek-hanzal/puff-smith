import {IFiberService, IFiberServiceCreate} from "@/puff-smith/service/fiber/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const FiberService = (request: IFiberServiceCreate): IFiberService => {
	const fiberService = singletonOf(() => FiberService(request));
	const tagService = singletonOf(() => TagService(request));

	return {
		...RepositoryService<IFiberService>({
			name: "fiber",
			source: request.prisma.fiber,
			mapper: async fiber => ({
				...fiber,
				material: await tagService().toMap(fiber.materialId),
			}),
			create: async ({material, materialId, ...fiber}) => {
				const $material = await tagService().fetchTag("material", material, materialId);
				return request.prisma.fiber.create({
					data: {
						...fiber,
						code: fiber.code || `${$material.code} ${fiber.ga}GA`,
						materialId: $material.id,
						mm: parseFloat(`${fiber.mm}`),
					}
				});
			},
			onUnique: async ({material, materialId, code, ...fiber}) => {
				const $fiber = (await request.prisma.fiber.findFirst({
					where: {
						OR: [
							{
								ga: fiber.ga,
								materialId: (await tagService().fetchTag("material", material, materialId)).id,
							},
							{
								code,
							},
						],
					},
					rejectOnNotFound: true,
				}));
				return request.prisma.fiber.update({
					where: {
						id: $fiber.id,
					},
					data: {
						...fiber,
						mm: parseFloat(`${fiber.mm}`),
					},
				});
			},
		}),
		fetchByCode: code => request.prisma.fiber.findUnique({
			where: {
				code,
			},
			rejectOnNotFound: true,
		}),
		fetchByCodes: codes => Promise.all(codes.map(async code => await fiberService().fetchByCode(code))),
	};
};
