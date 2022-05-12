import {MixtureJob} from "@/puff-smith/cli/jobs/mixture";
import {ServiceCreate} from "@/puff-smith/service";
import {IAromaService, IAromaServiceCreate, IAromaWhere} from "@/puff-smith/service/aroma/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";

export const AromaService = (request: IAromaServiceCreate = ServiceCreate()): IAromaService => RepositoryService<IAromaService>({
	name: "aroma",
	source: request.prisma.aroma,
	create: async ({vendor, tastes, ...aroma}) => {
		const $aroma = await request.prisma.aroma.create({
			data: {
				...aroma,
				vendor: {
					connect: {
						name: vendor,
					}
				},
				AromaTaste: {
					createMany: {
						data: tastes ? (await TagService(request).fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			},
		});
		await MixtureJob.schedule({
			aromaId: $aroma.id,
		}, request.userService.getOptionalUserId());
		return $aroma;
	},
	onUnique: async ({vendor, tastes, ...create}) => {
		const $aroma = await request.prisma.aroma.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		});
		await request.prisma.aromaTaste.deleteMany({
			where: {
				aromaId: $aroma.id,
			}
		});
		await MixtureJob.scheduleAt("in 10 seconds", {
			aromaId: $aroma.id,
		}, request.userService.getOptionalUserId());
		return request.prisma.aroma.update({
			where: {
				id: $aroma.id,
			},
			data: {
				...create,
				AromaTaste: {
					createMany: {
						data: tastes ? (await TagService(request).fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			},
		});
	},
	mapper: async aroma => ({
		...aroma,
		vendor: await VendorService(request).toMap(aroma.vendorId),
		tastes: await TagService(request).list(request.prisma.tag.findMany({
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
		ownedByUserId = ownedByCurrentUser ? request.userService.getUserId() : ownedByUserId;
		notOwnedByUserId = notOwnedByCurrentUser ? request.userService.getUserId() : notOwnedByUserId;
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
