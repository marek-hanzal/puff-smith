import {MutationEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";

export default MutationEndpoint<"Import", void, IJob, { fileId: string }>(async () => {
	return {
		id: 'ok',
	};
});
