import {IImportJob, IImportJobParams} from "@/puff-smith/jobs/import/interface";
import {ImportJob} from "@/puff-smith/jobs/import/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Import", IImportJobParams, IImportJob>({
	handler: ImportJob.request,
});
