import {PrismaClient} from "@prisma/client";

const createPrismaClient = () => {
	return new PrismaClient({
		log: ['query', 'info', 'warn', 'error'],
	});
}

export const prismaClient = createPrismaClient();
