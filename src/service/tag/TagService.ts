import prisma from "@/puff-smith/service/prisma";
import {ITagService} from "@/puff-smith/service/tag/interface";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const TagService = (prismaClient: IPrismaClientTransaction = prisma): ITagService => ({
	...RepositoryService<ITagService>({
		name: "tag",
		source: prismaClient.tag,
		mapper: async tag => tag,
		create: async tag => prismaClient.tag.create({
			data: {
				...tag,
				code: `${tag.code}`,
			},
		}),
		onUnique: async data => prismaClient.tag.update({
			where: {
				id: (await prismaClient.tag.findFirst({
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
	fetchCodes: async (codes, group) => prismaClient.tag.findMany({
		where: {
			code: {
				in: codes.split(/,\s+/ig).map(code => `${code}`.toLowerCase()),
			},
			group,
		}
	}),
});
