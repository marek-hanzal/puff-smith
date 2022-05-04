import {FixturesMigration} from "@/puff-smith/cli/migrations/FixtureMigration";
import {MixtureMigration} from "@/puff-smith/cli/migrations/MixtureMigration";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJobProcessor} from "@leight-core/api";

const JOB_NAME = "migrate";

const migrations = [
	FixturesMigration,
	MixtureMigration,
];

export const MigrationJob: IJobProcessor<void> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<void>(JOB_NAME, undefined, userId),
	register: agenda => agenda.define(JOB_NAME, {
		concurrency: 1,
		priority: 100,
	}, JobService().handle(JOB_NAME, async ({logger}) => {
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
			try {
				await migration.run();
				logger.info("Migration done", {labels, ...others});
			} catch (e) {
				logger.error("Migration failed", {labels, ...others});
				if (e instanceof Error) {
					logger.error(e.message, {labels, ...others});
				}
			}
		}
		logger.info("Migrations done");
	})),
};
