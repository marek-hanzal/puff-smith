import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {onUnique, pageOf, Source} from "@leight-core/server";

export const TagSource = (): ITagSource => {
	const source: ITagSource = Source<ITagSource>({
		name: "tag",
		prisma,
		map: async tag => tag,
		source: {
			get: async id => source.prisma.tag.findUnique({
				where: {id},
				rejectOnNotFound: true,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.tag.findMany({
				where: filter,
				orderBy,
				...pageOf(query),
			}),
			create: async tag => {
				const create = {
					...tag,
					code: `${tag.code}`,
				};
				try {
					return await source.prisma.tag.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.tag.update({
						where: {
							id: (await source.prisma.tag.findFirst({
								where: {
									code: `${create.code}`,
									group: create.group,
								},
								rejectOnNotFound: true,
							})).id,
						},
						data: create,
					}));
				}
			},
		},
		fetchByCodes: async (codes, group) => {
			if (!codes) {
				return [];
			}
			const $codes = Array.isArray(codes) ? codes : codes.split(/,\s*/ig).map(code => `${code}`.toLowerCase());
			return source.prisma.tag.findMany({
				where: {
					OR: [
						{
							code: {
								in: $codes,
							},
						},
						{
							id: {
								in: $codes,
							},
						},
					],
					group,
				}
			});
		},
		fetchTag: (group, code, tagId) => {
			if (!code && !tagId) {
				throw new Error(`Provide [code] or [tagId] in group [${group}].`);
			}
			return source.prisma.tag.findUnique({
				where: tagId ? {
					id: tagId,
				} : {
					code_group: {
						group,
						code: code!,
					}
				},
				rejectOnNotFound: true,
			});
		},
	});

	return source;
};
