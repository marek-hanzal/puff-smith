import {Logger} from "@leight-core/server";
import {PrismaClient} from "@prisma/client";

const createPrismaClient = () => {
	const prisma = new PrismaClient({
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
	prisma.$on("query", ({query, params, duration}) => Logger("query").debug(query, {params, duration}));
	prisma.$on("info", e => Logger("query").info(e.message));
	prisma.$on("warn", e => Logger("query").warn(e.message));
	prisma.$on("error", e => Logger("query").error(e.message));
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
