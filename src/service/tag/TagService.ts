import {ServiceCreate} from "@/puff-smith/service";
import {ITagService, ITagServiceCreate} from "@/puff-smith/service/tag/interface";
import {RepositoryService} from "@leight-core/server";

export const TagService = (request: ITagServiceCreate = ServiceCreate()): ITagService => ({
	...RepositoryService<ITagService>({
		name: "tag",
		source: request.prisma.tag,
		mapper: async tag => tag,
		create: async tag => request.prisma.tag.create({
			data: {
				...tag,
				code: `${tag.code}`,
			},
		}),
		onUnique: async data => request.prisma.tag.update({
			where: {
				id: (await request.prisma.tag.findFirst({
					where: {
						code: `${data.code}`,
						group: data.group,
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: {
				...data,
				code: `${data.code}`,
			},
		}),
	}),
	fetchCodes: async (codes, group) => request.prisma.tag.findMany({
		where: {
			code: {
				in: codes.split(/,\s*/ig).map(code => `${code}`.toLowerCase()),
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
});
