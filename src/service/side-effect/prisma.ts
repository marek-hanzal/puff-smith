import {PrismaClient} from "@prisma/client";

interface ExtendedGlobal extends Global {
	prisma: PrismaClient;
}

declare const global: ExtendedGlobal;

const createPrismaClient = () => {
	const prisma = new PrismaClient({
		errorFormat: "pretty",
		log: [
			{
				emit:  "event",
				level: "query",
			},
			{
				emit:  "event",
				level: "error",
			},
			{
				emit:  "event",
				level: "info",
			},
			{
				emit:  "event",
				level: "warn",
			},
		],
	});
	// prisma.$on("query", ({query, params, duration}) => {
	// 	duration >= 100 ?
	// 		Logger("query").warn(`===\nSlow query (${toHumanNumber(duration)}ms)\n=====\n${query}\n=======\n`, {params, duration, labels: {slowQuery: true}}) :
	// 		Logger("query").debug(query, {params, duration});
	// });
	// prisma.$on("info", e => Logger("query").info(e.message));
	// prisma.$on("warn", e => Logger("query").warn(e.message));
	// prisma.$on("error", e => Logger("query").error(e.message));
	return prisma;
};

const prisma = global.prisma || (global.prisma = createPrismaClient());

export default prisma;
