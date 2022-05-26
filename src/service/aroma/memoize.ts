import prisma from "@/puff-smith/service/side-effect/prisma";
import memoizee from "memoizee";

export const memoIsOwned = memoizee(async (aromaId, userId) => await prisma.aromaInventory.count({
	where: {
		aromaId: aromaId,
		userId,
	}
}) > 0, {
	primitive: true,
	max: 256,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
});

export const memoTastes = memoizee(async (id, tagSource) => await tagSource().mapper.list(prisma.tag.findMany({
	where: {
		AromaTaste: {
			some: {
				aromaId: id,
			}
		}
	},
	orderBy: {
		sort: "asc",
	}
})), {
	primitive: true,
	max: 256,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
