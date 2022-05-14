import {CoilMigration} from "@/puff-smith/cli/migrations/CoilMigration";
import {FixturesMigration} from "@/puff-smith/cli/migrations/FixtureMigration";
import {ServiceCreate} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJobProcessor} from "@leight-core/api";

const MIGRATION_JOB = "migrate";

const migrations = [
	FixturesMigration,
	CoilMigration,
];

export const MigrationJob: IJobProcessor<void> = {
	name: () => MIGRATION_JOB,
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<void>({
		name: MIGRATION_JOB,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<void>({
		name: MIGRATION_JOB,
		params,
		at: schedule,
	}),
	register: agenda => agenda.define(MIGRATION_JOB, {
		concurrency: 1,
		priority: 20,
	}, JobService().handle(MIGRATION_JOB, async ({logger}) => {
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
				// await migration.run();
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
