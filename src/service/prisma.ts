import {PrismaClient} from "@prisma/client";

const createPrismaClient = () => {
	return new PrismaClient({
		log: ["info", "warn", "error"],
	});
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prisma = createPrismaClient();
} else {
	if (!(global as any).prisma) {
		(global as any).prisma = createPrismaClient();
	}
	prisma = (global as any).prisma;
}

export default prisma;
