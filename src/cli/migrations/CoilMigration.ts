import {CoilsJob} from "@/puff-smith/cli/jobs/coil";
import {IMigration} from "@/puff-smith/service/migration/interface";
import {Logger} from "@leight-core/server";

export const CoilMigration: IMigration = {
	name: () => "CoilMigration",
	isEnabled: () => true,
	run: async () => {
		const logger = Logger("migration");
		const labels = {migration: "coil"};
		logger.info("Scheduling CoilMigration.", {labels});
		await CoilsJob.scheduleAt("in 2 minutes", {});
		logger.info("CoilMigration done.", {labels});
	},
};
