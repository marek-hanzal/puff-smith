import {asyncJob} from "@/puff-smith/agenda/agenda";
import {IImportParams, ImportJobName} from "@/puff-smith/agenda/job/import";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Import", void, IJob<IImportParams>, IImportParams>(async ({query, toUserId}) => asyncJob(ImportJobName, query, toUserId()));
