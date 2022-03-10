import {MutationEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";
import {asyncJob} from "@/puff-smith/agenda/agenda";
import {IImportParams, ImportJobName} from "@/puff-smith/agenda/job/import";

export default MutationEndpoint<"Import", void, IJob<IImportParams>, IImportParams>(async ({query}) => {
	return asyncJob(ImportJobName, query);
});
