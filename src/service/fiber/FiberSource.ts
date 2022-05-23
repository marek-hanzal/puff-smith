import {IFiberSource, IFiberSourceCreate} from "@/puff-smith/service/fiber/interface";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const FiberSource = (request: IFiberSourceCreate): IFiberSource => {
	const fiberSource = singletonOf(() => FiberSource(request));
	const tagSource = singletonOf(() => TagSource(request));

	return {
		...Source<IFiberSource>({
			name: "fiber",
			source: request.prisma.fiber,
			mapper: async fiber => ({
				...fiber,
				material: await tagSource().toMap(fiber.materialId),
			}),
			create: async ({material, materialId, ...fiber}) => {
				const $material = await tagSource().fetchTag("material", material, materialId);
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
										materialId: (await tagSource().fetchTag("material", material, materialId)).id,
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
		fetchByCodes: codes => Promise.all(codes.map(async code => await fiberSource().fetchByCode(code))),
	};
};
