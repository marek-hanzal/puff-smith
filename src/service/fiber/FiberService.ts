import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IFiberService, IFiberServiceCreate} from "@/puff-smith/service/fiber/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {RepositoryService} from "@leight-core/server";

export const FiberService = (request: IFiberServiceCreate = ServiceCreate()): IFiberService => RepositoryService<IFiberService>({
	name: "fiber",
	source: request.prisma.fiber,
	mapper: async fiber => ({
		...fiber,
	}),
	create: async ({material, materialId, ...create}) => request.prisma.fiber.create({
		data: {
			code: create.code || CodeService().code(),
			materialId: (await TagService(request).fetchTag("material", material, materialId)).id,
			...create,
		}
	}),
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
});
