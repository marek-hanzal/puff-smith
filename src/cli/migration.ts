import {BuildComputation} from "@/puff-smith/cli/migration/BuildComputation";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {PrismaClient} from "@prisma/client";
import {JSONStorage, Umzug} from "umzug";

export interface IMigration {
	readonly name: string;

	up(params: { context: PrismaClient }): Promise<any>;
}

const umzug = new Umzug({
	migrations: [
		BuildComputation,
	],
	storage: new JSONStorage(),
	context: prisma,
	logger: console,
});

umzug.up()
	.then(() => process.exit(0))
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
