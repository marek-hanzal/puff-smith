import {MigrateJobName} from "@/puff-smith/agenda/job/migrate";
import {JobService} from "@/puff-smith/service/job/JobService";

JobService().schedule(MigrateJobName, undefined)
	.then(() => {
		console.log("Worker Done");
		process.exit();
	})
	.catch(() => {
		process.exit(1);
	});
