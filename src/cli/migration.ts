import "@/puff-smith/service/side-effect/bootstrap";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {runSql} from "@leight-core/server";
import path from "node:path";
import {JSONStorage, Umzug} from "umzug";

const umzug = new Umzug({
	migrations: {
		glob: process.cwd() + "/prisma/migrations/**/*.{ts,sql}",
		resolve: params => {
			const {context: prisma} = params;
			const name = path.normalize(params.path!!.replace(process.cwd(), "")).replaceAll("\\", "/");
			if (params.path?.endsWith(".sql")) {
				return {
					name,
					up: async () => runSql(params.path as string, prisma),
				};
			}
			const defaults = Umzug.defaultResolver(params);
			return {
				...defaults,
				name,
			};
		},
	},
	storage: new JSONStorage(),
	context: prisma,
	logger: console,
});

export type IMigration = typeof umzug._types.migration;

umzug.up()
	.then(() => process.exit(0))
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
