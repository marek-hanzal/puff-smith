import {FixturesMigration} from "@/puff-smith/service/migration";
import {Logger} from "@leight-core/server";
import {Agenda, Processor} from "agenda";

export const MigrateJobName = "migrate";

const migrations = [
	FixturesMigration,
];

export default function MigrationJob(agenda: Agenda) {
	let logger = Logger("migration");
	agenda.define(MigrateJobName, {
		concurrency: 1,
		priority: 100,
	}, (async () => {
		logger.info("Running migrations");
		await Promise.all(migrations.map(async migration => {
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
		}));
		logger.info("Migrations done");
	}) as Processor);
}
