import {JobService} from "@/puff-smith/service/job/JobService";
import {FixturesMigration} from "@/puff-smith/service/migration/FixtureMigration";
import {Agenda} from "agenda";

export const MigrateJobName = "migrate";

const migrations = [
	FixturesMigration,
];

export default function MigrationJob(agenda: Agenda) {
	agenda.define(MigrateJobName, {
		concurrency: 1,
		priority: 100,
	}, JobService().handle(MigrateJobName, async ({logger}) => {
		console.log("!!! EXECUTING MIGRAION JOB!");
		logger.info("Running migrations");
		for (const migration of migrations) {
			const labels = {migration: migration.name()};
			const others = labels;
			logger.info("Checking migration", {labels, ...others});
			if (!migration.isEnabled()) {
				logger.info("Migration not enabled", {labels, ...others});
				return;
			}
			logger.info("Running migration", {labels, ...others});
			await migration.run();
			logger.info("Migration done", {labels, ...others});
		}
		logger.info("Migrations done");
	}));
}
