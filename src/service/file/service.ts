import {ImportJobName} from "@/puff-smith/agenda/job/import";
import {JobService} from "@/puff-smith/service/job/JobService";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {IFileStoreRequest} from "@leight-core/api";


export const scheduleFileImport = async (request: Pick<IFileStoreRequest, "name" | "file">) => JobService().schedule(ImportJobName, {
	fileId: fileService.store({
		...request,
		file: process.cwd() + request.file,
		path: "/import",
		replace: true,
	}).id,
});
