import {CoilJob, CoilsJob} from "@/puff-smith/cli/jobs/coil";
import {ImportJob} from "@/puff-smith/cli/jobs/import";
import {MigrationJob} from "@/puff-smith/cli/jobs/migrate";
import {MixtureJob, MixturesJob} from "@/puff-smith/cli/jobs/mixture";
import agenda from "@/puff-smith/service/side-effect/agenda";
import {Logger} from "@leight-core/server";

(async function () {
	const jobs = [
		CoilJob,
		CoilsJob,
		ImportJob,
		MigrationJob,
		MixtureJob,
		MixturesJob,
	];

	const logger = Logger("job");

	logger.debug("Registering jobs...");
	jobs.map(job => job.register(agenda));
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
