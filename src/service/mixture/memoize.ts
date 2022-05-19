import prisma from "@/puff-smith/service/side-effect/prisma";
import memoizee from "memoizee";

export const memoMixtureDraws = memoizee(async (mixtureId, tagRepository) => Promise.all((await prisma.mixtureDraw.findMany({
	where: {
		mixtureId,
	},
	orderBy: {
		draw: {sort: "asc"},
	},
	include: {
		draw: true,
	}
})).map(({draw}) => tagRepository().map(draw))), {
	primitive: true,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
