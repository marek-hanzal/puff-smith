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
				name: "Tariffs.xlsx",
				file: "/fixtures/00 - tariffs.xlsx",
			},
			{
				name: "Translations.xlsx",
				file: "/fixtures/00 - translations.xlsx",
			},
			{
				name: "tags.xlsx",
				file: "/fixtures/01 - tags.xlsx",
			},
			{
				name: "vendors.xlsx",
				file: "/fixtures/02 - vendors.xlsx",
			},
			{
				name: "prices.xlsx",
				file: "/fixtures/01 - prices.xlsx",
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
