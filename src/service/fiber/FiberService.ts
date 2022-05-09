import {ServiceCreate} from "@/puff-smith/service";
import {IFiberService, IFiberServiceCreate} from "@/puff-smith/service/fiber/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {RepositoryService} from "@leight-core/server";

export const FiberService = (request: IFiberServiceCreate = ServiceCreate()): IFiberService => ({
	...RepositoryService<IFiberService>({
		name: "fiber",
		source: request.prisma.fiber,
		mapper: async fiber => ({
			...fiber,
			mm: fiber.mm.toNumber(),
			material: await TagService(request).toMap(fiber.materialId),
		}),
		create: async ({material, materialId, ...create}) => {
			const _material = await TagService(request).fetchTag("material", material, materialId);
			return request.prisma.fiber.create({
				data: {
					code: create.code || `${_material.code} ${create.ga}GA`,
					materialId: _material.id,
					...create,
				}
			});
		},
		onUnique: async ({material, materialId, ...create}) => {
			const _fiber = (await request.prisma.fiber.findFirst({
				where: {
					ga: create.ga,
					materialId: (await TagService(request).fetchTag("material", material, materialId)).id,
				},
				rejectOnNotFound: true,
			}));

			return request.prisma.fiber.update({
				where: {
					id: _fiber.id,
				},
				data: create,
			});
		},
	}),
	fetchByCode: code => request.prisma.fiber.findUnique({
		where: {
			code,
		},
		rejectOnNotFound: true,
	}),
	fetchByCodes: codes => Promise.all(codes.map(async code => await FiberService(request).fetchByCode(code))),
});
