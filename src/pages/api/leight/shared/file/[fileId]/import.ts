import {MutationEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";
import {asyncJob} from "@/puff-smith/agenda/agenda";
import {ImportJobName} from "@/puff-smith/agenda/job/import";

export default MutationEndpoint<"Import", void, IJob, { fileId: string }>(async ({query}) => {
	await asyncJob(ImportJobName, query);
	return {
		id: 'ok',
	};
});
