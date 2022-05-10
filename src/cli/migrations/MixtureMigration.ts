import {MixturesJob} from "@/puff-smith/cli/jobs/mixture";
import {IMigration} from "@/puff-smith/service/migration/interface";
import {Logger} from "@leight-core/server";

export const MixtureMigration: IMigration = {
	name: () => "MixtureMigration",
	isEnabled: () => true,
	run: async () => {
		const logger = Logger("migration");
		const labels = {migration: "mixture"};
		logger.info("Scheduling MixtureMigration.", {labels});
		await MixturesJob.scheduleAt("in 2 minutes", {});
		logger.info("MixtureMigration done.", {labels});
	},
};
