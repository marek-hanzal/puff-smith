import {ImportJobName} from "@/puff-smith/agenda/job/import";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IFileStoreRequest} from "@leight-core/api";
import {FileService} from "@leight-core/server";

export const fileService = FileService({
	config: {
		path: ".data/file/{fileId}",
	}
});

export const scheduleFileImport = async (request: Pick<IFileStoreRequest, "name" | "file">) => JobService().schedule(ImportJobName, {
	fileId: fileService.store({
		...request,
		file: process.cwd() + request.file,
		path: "/import",
		replace: true,
	}).id,
});
