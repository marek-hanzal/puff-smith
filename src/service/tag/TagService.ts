import {IPrismaClientTransaction} from "@leight-core/api";
import {ITagService} from "@/puff-smith/service/tag/interface";
import {RepositoryService} from "@leight-core/server";
import prisma from "@/puff-smith/service/prisma";
import {Tag} from "@prisma/client";

export const TagService = (prismaClient: IPrismaClientTransaction = prisma): ITagService => ({
	...RepositoryService<ITagService>({
		name: 'tag',
		source: prismaClient.tag,
		mapper: async tag => tag,
		create: async tag => prismaClient.tag.create({
			data: {
				...tag,
				code: `${tag.code}`,
			},
		}),
		onUnique: async create => prismaClient.tag.update({
			where: {
				id: (await prismaClient.tag.findFirst({
					where: {
						code: `${create.code}`,
						group: create.group,
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: create,
		}),
	}),
	async fetchCodes(codes, group) {
		return (await Promise.all(codes.split(/,\s+/ig).map(async code => await prismaClient.tag.findFirst({
			where: {
				code: `${code}`.toLowerCase(),
				group,
			}
		})))).filter(tag => tag !== null) as Tag[];
	}
})
