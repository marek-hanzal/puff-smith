import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {memoTastes} from "@/puff-smith/service/aroma/memoize";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {countOf, findOf, pageOf, Source, uniqueOf} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaSource = (): IAromaSource => {
	const tagSource = singletonOf(() => TagSource());
	const vendorSource = singletonOf(() => VendorSource());

	const source: IAromaSource = Source<IAromaSource>({
		name: "aroma",
		prisma,
		get: uniqueOf(prisma.aroma.findUnique),
		find: findOf(prisma.aroma.findFirst),
		count: countOf(prisma.aroma.count),
		query: async query => prisma.aroma.findMany({
			where: source.filter(query.filter),
			include: {
				vendor: true,
			},
			...pageOf(query),
		}),
		map: async aroma => ({
			...aroma,
			vendor: await vendorSource().mapper.map(aroma.vendor),
			tastes: await memoTastes(aroma.id, tagSource),
		}),
		filter: ({fulltext} = {}) => ({
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
		}),
	});

	return source;
};
