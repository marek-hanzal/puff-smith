import {MixtureJob} from "@/puff-smith/cli/jobs/mixture";
import {IMigration} from "@/puff-smith/service/migration/interface";
import {Logger} from "@leight-core/server";

export const MixtureMigration: IMigration = {
	name: () => "MixtureMigration",
	isEnabled: () => true,
	run: async () => {
		const logger = Logger("migration");
		const labels = {migration: "mixture"};
		logger.info("Scheduling MixtureMigration.", {labels});
		await MixtureJob.schedule({aromaId: "all"});
		logger.info("MixtureMigration done.", {labels});
	},
};
