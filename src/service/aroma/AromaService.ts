import {IAromaService, IAromaWhere} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AromaService = (prismaClient: IPrismaClientTransaction = prisma): IAromaService => RepositoryService<IAromaService>({
	name: "aroma",
	source: prismaClient.aroma,
	create: async ({vendor, tastes, ...aroma}) => prismaClient.aroma.create({
		data: {
			...aroma,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			AromaTaste: {
				createMany: {
					data: tastes ? (await TagService(prismaClient).fetchCodes(tastes, "taste")).map(tag => ({
						tasteId: tag.id,
					})) : [],
				}
			},
		},
	}),
	onUnique: async ({vendor, tastes, ...create}) => {
		const _aroma = await prismaClient.aroma.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		});
		await prismaClient.aromaTaste.deleteMany({
			where: {
				aromaId: _aroma.id,
			}
		});
		return prismaClient.aroma.update({
			where: {
				id: _aroma.id,
			},
			data: {
				...create,
				AromaTaste: {
					createMany: {
						data: tastes ? (await TagService(prismaClient).fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			},
		});
	},
	mapper: async aroma => ({
		...aroma,
		vendor: await VendorService(prismaClient).toMap(aroma.vendorId),
		cost: aroma.cost.toNumber(),
		content: aroma.content.toNumber(),
		volume: aroma.volume?.toNumber(),
		pg: aroma.pg.toNumber(),
		vg: aroma.vg.toNumber(),
		tastes: await TagService(prismaClient).list(prismaClient.tag.findMany({
			where: {
				AromaTaste: {
					some: {
						aromaId: aroma.id,
					}
				}
			},
			orderBy: {
				sort: "asc",
			}
		})),
	}),
	toFilter: ({fulltext, ownedByUserId, notOwnedByUserId, ownedByCurrentUser, notOwnedByCurrentUser, ...filter} = {}) => {
		let _filter: IAromaWhere = fulltext ? {
			...filter,
			OR: [
				{
					name: {
						contains: fulltext,
						mode: "insensitive",
					}
				},
				{
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				},
			],
		} : filter;
		ownedByUserId = ownedByCurrentUser ? userId : ownedByUserId;
		notOwnedByUserId = notOwnedByCurrentUser ? userId : notOwnedByUserId;
		if (ownedByUserId) {
			_filter = {
				...filter,
				AromaInventory: {
					some: {
						userId: ownedByUserId,
					}
				}
			};
		}
		if (notOwnedByUserId) {
			_filter = {
				...filter,
				AromaInventory: {
					none: {
						userId: notOwnedByUserId,
					}
				}
			};
		}
		return _filter;
	},
});
