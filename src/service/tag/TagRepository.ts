import {defaults} from "@/puff-smith/service";
import {ITagRepository, ITagRepositoryCreate} from "@/puff-smith/service/tag/interface";
import {onUnique, Repository} from "@leight-core/server";

export const TagRepository = (request: ITagRepositoryCreate = defaults()): ITagRepository => {
	return {
		...Repository<ITagRepository>({
			name: "tag",
			source: request.prisma.tag,
			mapper: async tag => tag,
			create: async tag => {
				const create = {
					...tag,
					code: `${tag.code}`,
				};
				try {
					return await request.prisma.tag.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.tag.update({
						where: {
							id: (await request.prisma.tag.findFirst({
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
		}),
		fetchCodes: async (codes, group) => request.prisma.tag.findMany({
			where: {
				code: {
					in: codes.split(/,\s*/ig).map(code => `${code}`.toLowerCase()),
				},
				group,
			}
		}),
		fetchByCodes: async (codes, group) => request.prisma.tag.findMany({
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
			return request.prisma.tag.findUnique({
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
	};
};
