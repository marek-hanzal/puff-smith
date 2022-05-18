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

export const memoAromaToMap = memoizee(async (aromaId, aromaService) => aromaService().toMap(aromaId), {
	primitive: true,
	max: 256,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});

export const memoTastes = memoizee(async (id, tagService) => await tagService().list(prisma.tag.findMany({
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
