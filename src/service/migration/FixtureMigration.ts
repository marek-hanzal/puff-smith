import {IMigration} from "@/puff-smith/service/migration/interface";
import {Logger} from "@leight-core/server";

export const FixturesMigration: IMigration = {
	name: () => "FixturesMigration",
	run: async () => {
		const logger = Logger("migration");
		const labels = {migration: "fixtures"};
		logger.info("Running FixturesMigration.", {labels});
		// this will be quite hard
		logger.info("FixturesMigration done.", {labels});
	},
	isEnabled: () => true,
};
