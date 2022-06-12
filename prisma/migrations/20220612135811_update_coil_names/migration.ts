import {IMigration} from "@/puff-smith/cli/migration";
import "@/puff-smith/service/side-effect/bootstrap";

export const up: IMigration = async ({context: prisma}) => {
	const coils = await prisma.$queryRaw<{ id: string, size: number, wraps: number, name: string, mmToRound: number }[]>`
		SELECT
			c."id",
			c."size",
			c."wraps",
			w."mmToRound",
			w."name"
		FROM
			"Coil" c,
			"Wire" w
		WHERE
			w.id = c."wireId"
`;
	for (const {id, name, size, wraps, mmToRound} of coils) {
		await prisma.$executeRaw`UPDATE "Coil" SET "name"=${`${name} ⌀${mmToRound}mm o${Math.round(size * 1000) / 1000}⌀ x${wraps}↺`} WHERE "id" = ${id}`;
	}
};
