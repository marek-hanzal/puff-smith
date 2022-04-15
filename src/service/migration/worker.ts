import {Agenda} from "@/puff-smith/agenda/agenda";
import {MigrateJobName} from "@/puff-smith/agenda/job/migrate";
import {Logger} from "@leight-core/server";

const worker = async () => {
	const logger = Logger("migration");
	logger.info("Scheduling migration job");
	await (await Agenda()).now(MigrateJobName, {});
	logger.info("Done");
};

worker().then(() => {
	console.log("Worker Done");
	process.exit();
});