import {scheduleFileImport} from "@/puff-smith/service/file";
import {IMigration} from "@/puff-smith/service/migration/interface";
import {Logger} from "@leight-core/server";

export const FixturesMigration: IMigration = {
	name: () => "FixturesMigration",
	run: async () => {
		const logger = Logger("migration");
		const labels = {migration: "fixtures"};
		logger.info("Running FixturesMigration.", {labels});

		const files: Parameters<typeof scheduleFileImport>[0][] = [
			{
				name: "fixtures.xlsx",
				file: "/fixtures/fixtures.xlsx",
			},
		];
		try {
			await Promise.all(files.map(request => scheduleFileImport(request)));
		} catch (e) {
			let message = "Migration failed";
			if (e instanceof Error) {
				message = e.message;
			}
			logger.error(message, {labels});
		}
		logger.info("FixturesMigration done.", {labels});
	},
	isEnabled: () => true,
};
