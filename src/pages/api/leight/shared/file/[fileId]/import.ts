import {MutationEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";
import ImportQueue from '@/puff-smith/pages/api/queue/file/import';

export default MutationEndpoint<"Import", void, IJob, { fileId: string }>(async ({query}) => {
	await ImportQueue.enqueue(query);
	return {
		id: 'ok',
	};
});
