import {IPrismaClientTransaction} from "@leight-core/api";
import {ITagService} from "@/puff-smith/service/tag/interface";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import prisma from "@/puff-smith/service/prisma";
import {Tag} from "@prisma/client";

export const TagService = (prismaClient: IPrismaClientTransaction = prisma): ITagService => {
	const service: ITagService = {
		...AbstractRepositoryService<ITagService>(prismaClient, prismaClient.tag, async tag => tag),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async tag => {
			try {
				return prismaClient.tag.create({
					data: {
						...tag,
						code: `${tag.code}`,
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					return prismaClient.tag.update({
						where: {
							code_group: {
								code: tag.code,
								group: tag.group,
							},
						},
						data: tag,
					})
				});
			}
		},
		importers: () => ({
			tag: () => ({
				handler: service.create,
			}),
		}),
		async fetchCodes(codes, group) {
			return (await Promise.all(codes.split(/,\s+/ig).map(async code => await prismaClient.tag.findFirst({
				where: {
					code: code.toLowerCase(),
					group,
				}
			})))).filter(tag => tag !== null) as Tag[];
		}
	};

	return service;
};
