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
				emit: "stdout",
				level: "error",
			},
			{
				emit: "stdout",
				level: "info",
			},
			{
				emit: "stdout",
				level: "warn",
			},
		],
	});
	prisma.$on("query", ({query, params, duration}) => Logger("query").debug("Query", {query, params, duration}));
	// prisma.$on("error", (e => Logger("query").error("Query Error", {error: e}));
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
