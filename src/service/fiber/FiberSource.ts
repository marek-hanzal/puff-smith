import {IFiberSource} from "@/puff-smith/service/fiber/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {onUnique, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const FiberSource = (): IFiberSource => {
	const fiberSource = singletonOf(() => FiberSource());
	const tagSource = singletonOf(() => TagSource());

	const source: IFiberSource = Source<IFiberSource>({
		name: "fiber",
		prisma,
		map: async fiber => fiber ? ({
			...fiber,
			material: await tagSource().mapper.map(fiber.material),
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => {
				const $fulltext = fulltext?.split(/\s+/g);
				return source.prisma.fiber.count({
					where: merge(filter, {
						AND: ($fulltext?.map(fulltext => ({
							OR: [
								{
									code: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							],
						})) || []).concat(filter?.AND as [] || []),
					}),
				});
			},
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const $fulltext = fulltext?.split(/\s+/g);
				return source.prisma.fiber.findMany({
					where: merge(filter, {
						AND: ($fulltext?.map(fulltext => ({
							OR: [
								{
									code: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							],
						})) || []).concat(filter?.AND as [] || []),
					}),
					include: {
						material: true,
					}
				});
			},
			create: async ({material, materialId, ...fiber}) => {
				const $material = await tagSource().fetchTag("material", material, materialId);
				const create = {
					...fiber,
					code: fiber.code || `${$material.code} ${fiber.ga}GA`,
					materialId: $material.id,
					mm: parseFloat(`${fiber.mm}`),
				};
				try {
					return await source.prisma.fiber.create({
						data: create,
						include: {
							material: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $fiber = (await source.prisma.fiber.findFirst({
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
						return source.prisma.fiber.update({
							where: {
								id: $fiber.id,
							},
							data: create,
							include: {
								material: true,
							},
						});
					});
				}
			},
		},
		fetchByCode: code => source.prisma.fiber.findUnique({
			where: {
				code,
			},
			rejectOnNotFound: true,
			include: {
				material: true,
			},
		}),
		fetchByCodes: codes => Promise.all(codes.map(async code => await fiberSource().fetchByCode(code)))
	});

	return source;
};
