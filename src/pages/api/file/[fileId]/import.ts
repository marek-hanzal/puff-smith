import {IImportParams, ImportJobName} from "@/puff-smith/agenda/job/import";
import {JobService} from "@/puff-smith/service/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Import", void, IJob<IImportParams>, IImportParams>(async ({query, toUserId}) => JobService().schedule(ImportJobName, query, toUserId()));
