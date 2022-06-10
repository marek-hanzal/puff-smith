import {IMigration} from "@/puff-smith/cli/migration";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import "@/puff-smith/service/side-effect/bootstrap";
import {Prisma} from "@prisma/client";

export const up: IMigration = async ({context: prisma}) => {
	const builds = await prisma.$queryRaw<{ id: string, ohm: Prisma.Decimal }[]>`SELECT id, ohm FROM Build`;
	const ohmService = OhmService();
	for (const {id, ohm} of builds) {
		const drain = ohmService.toAmps(3.7, ohm.toNumber());
		const watts = ohmService.toWatt(3.7, drain);
		await prisma.$executeRaw`UPDATE Build SET drain=${drain}, watts=${watts} WHERE id = ${id}`;
	}
};
