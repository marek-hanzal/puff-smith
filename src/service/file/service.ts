import {ImportJob} from "@/puff-smith/jobs/import/job";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {IFileStoreRequest} from "@leight-core/api";

export const scheduleFileImport = async (request: Pick<IFileStoreRequest, "name" | "file">) => ImportJob.async({
	fileId: fileService.store({
		...request,
		file: process.cwd() + request.file,
		path: "/import",
		replace: true,
	}).id,
});
