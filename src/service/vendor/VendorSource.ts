import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const VendorSource = (): IVendorSource => {
	const source: IVendorSource = Source<IVendorSource>({
		name: "vendor",
		prisma,
		map: async vendor => vendor,
		source: {
			create: async vendor => {
				const create = vendor;
				try {
					return await source.prisma.vendor.create({
						data: {
							...create,
							userId: source.user.optional(),
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.vendor.findFirst({
						where: {
							name: create.name,
						},
						rejectOnNotFound: true,
					}));
				}
			},
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.vendor.count({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.vendor.findMany({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				}),
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.vendor.findMany({
					where,
				});
				await prisma.vendor.deleteMany({
					where,
				});
				return items;
			},
		},
		fetchByReference: ({vendorId, vendor}) => {
			if (!vendor && !vendorId) {
				throw new Error(`Provide [vendor] or [vendorId].`);
			}
			return source.prisma.vendor.findUnique({
				where: vendorId ? {
					id: vendorId,
				} : {
					name: vendor,
				},
				rejectOnNotFound: true,
			});
		},
		fetchByReferenceOptional: async fetch => {
			try {
				return await source.fetchByReference(fetch);
			} catch (e) {
				return undefined;
			}
		}
	});

	return source;
};
