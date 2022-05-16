import {IImportJob, IImportJobParams} from "@/puff-smith/cli/jobs/import/interface";
import {ImportJob} from "@/puff-smith/cli/jobs/import/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Import", IImportJobParams, IImportJob>(ImportJob.request);
