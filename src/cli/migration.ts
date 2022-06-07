import {BuildComputation} from "@/puff-smith/cli/migration/BuildComputation";
import {JSONStorage, Umzug} from "umzug";

export interface IMigration {
	readonly name: string;

	up(): Promise<any>;
}

const umzug = new Umzug({
	migrations: [
		BuildComputation,
	],
	storage: new JSONStorage(),
	logger: console,
});

umzug.up()
	.then(() => process.exit(0))
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
