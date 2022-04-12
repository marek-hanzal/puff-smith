import {Logger} from "@leight-core/server";
import {PrismaClient} from "@prisma/client";

const createPrismaClient = () => {
	const prisma = new PrismaClient({
		rejectOnNotFound: true,
		errorFormat: "pretty",
		log: [
			{
				emit: "event",
				level: "query",
			},
			{
				emit: "event",
				level: "error",
			},
			{
				emit: "event",
				level: "info",
			},
			{
				emit: "event",
				level: "warn",
			},
		],
	});
	const logger = Logger("query");
	prisma.$on("query", ({query, params, duration}) => logger.debug(query, {labels: {duration}, params, duration}));
	prisma.$on("info", e => logger.info(e.message));
	prisma.$on("warn", e => logger.warn(e.message));
	prisma.$on("error", e => logger.error(e.message));
	return prisma;
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
