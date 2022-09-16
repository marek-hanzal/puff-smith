import {IMigration} from "@/puff-smith/cli/migration";
import {ImportJob} from "@/puff-smith/jobs/import/job";
import fileService from "@/puff-smith/service/side-effect/fileService";

export const up: IMigration = async ({context: prisma}) => ImportJob.async({
	fileId: fileService.store({
		name: "fixtures.xlsx",
		path: "/fixtures",
		file: process.cwd() + "/fixtures/fixtures.xlsx",
		replace: true,
	}).id,
});
