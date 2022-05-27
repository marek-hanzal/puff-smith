import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {onUnique, Source} from "@leight-core/server";

export const TagSource = (): ITagSource => {
	const source: ITagSource = Source<ITagSource>({
		name: "tag",
		prisma,
		map: async tag => tag,
		source: {
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
		fetchCodes: async (codes, group) => source.prisma.tag.findMany({
			where: {
				code: {
					in: codes.split(/,\s*/ig).map(code => `${code}`.toLowerCase()),
				},
				group,
			}
		}),
		fetchByCodes: async (codes, group) => source.prisma.tag.findMany({
			where: {
				code: {
					in: codes.map(code => `${code}`.toLowerCase()),
				},
				group,
			}
		}),
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