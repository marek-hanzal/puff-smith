import {PrismaClient} from "@prisma/client";

const createPrismaClient = () => {
	return new PrismaClient({
		log: ['query', 'info', 'warn', 'error'],
	});
}

const prismaClient = createPrismaClient();

export default prismaClient;
