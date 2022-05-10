import {CoilMigration} from "@/puff-smith/cli/migrations/CoilMigration";
import {FixturesMigration} from "@/puff-smith/cli/migrations/FixtureMigration";
import {MixtureMigration} from "@/puff-smith/cli/migrations/MixtureMigration";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJobProcessor} from "@leight-core/api";

const JOB_NAME = "migrate";

const migrations = [
	FixturesMigration,
	MixtureMigration,
	CoilMigration,
];

export const MigrationJob: IJobProcessor<void> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<void>(JOB_NAME, undefined, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<void>(JOB_NAME, schedule, undefined, userId),
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
			logger.info(`Running [${migration.name()}] migration`, {labels, ...others});
			try {
				await migration.run();
				logger.info(`Migration [${migration.name()}] done`, {labels, ...others});
			} catch (e) {
				logger.error(`Migration [${migration.name()}] failed`, {labels, ...others});
				console.error(e);
				if (e instanceof Error) {
					logger.error(e.message, {labels, ...others});
				}
			}
		}
		logger.info("Migrations done");
	})),
};
