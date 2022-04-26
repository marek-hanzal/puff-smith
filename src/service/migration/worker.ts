import {MigrateJobName} from "@/puff-smith/agenda/job/migrate";
import {JobService} from "@/puff-smith/service/job/JobService";
import {Logger} from "@leight-core/server";

const worker = async () => {
	const logger = Logger("migration");
	logger.info("Scheduling migration job");
	await JobService().schedule(MigrateJobName, undefined);
	logger.info("Done");
};

worker().then(() => {
	console.log("Worker Done");
	process.exit();
}).catch(() => {
	process.exit(1);
});
