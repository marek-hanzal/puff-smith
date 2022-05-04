import {MigrationJob} from "@/puff-smith/cli/jobs/migrate";

MigrationJob.schedule()
	.then(() => {
		console.log("Worker Done");
		process.exit();
	})
	.catch(() => {
		process.exit(1);
	});
