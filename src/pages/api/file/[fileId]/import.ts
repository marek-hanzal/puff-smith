import {IImportJob, ImportJob} from "@/puff-smith/cli/jobs/import";
import {IJobParams} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Import", IJobParams<IImportJob>, IImportJob>(async ({request, toUserId}) => ImportJob.schedule(request, toUserId()));
