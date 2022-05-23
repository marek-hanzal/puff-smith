import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaVendorSource} from "@/puff-smith/service/aroma/interface";

export const AromaVendorSource = (): IAromaVendorSource => {
	const source: IAromaVendorSource = AromaSource().extend({
		query: async query => source.prisma.aroma.findMany({
			distinct: ["vendorId"],
			select: {
				vendor: true,
			},
			orderBy: [
				{
					vendor: {
						name: "asc",
					}
				}
			],
			where: source.filter(query.filter),
		}),
		filter: ({fulltext} = {}) => ({
			vendor: {
				name: {
					contains: fulltext,
					mode: "insensitive",
				}
			}
		}),
	});

	return source;
};
