import ImportJob from "@/puff-smith/cli/jobs/import";
import MigrationJob from "@/puff-smith/cli/jobs/migrate";
import MixtureJob from "@/puff-smith/cli/jobs/mixture";
import agenda from "@/puff-smith/service/side-effect/agenda";
import {Logger} from "@leight-core/server";

(async function () {
	const jobs = [
		ImportJob,
		MigrationJob,
		MixtureJob,
	];

	const logger = Logger("job");

	logger.debug("Registering jobs...");
	jobs.map(job => job(agenda));
	logger.debug("Starting Agenda...");
	await agenda.start();
	logger.debug("Started!");

	async function graceful() {
		logger.debug("Graceful shutdown of Agenda");
		await agenda.stop();
		logger.debug("Done!");
		process.exit(0);
	}

	process.on("SIGTERM", graceful);
	process.on("SIGINT", graceful);
})();
