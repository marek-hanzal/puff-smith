import {FetchEndpoint} from '@leight-core/server';
import {IJobStatus} from "@leight-core/api";

export default FetchEndpoint<"StatusList", IJobStatus[]>(async () => {
	return [
		'NEW',
		'FAILURE',
		'SUCCESS',
		'RUNNING',
		'REVIEW',
		'DONE',
	];
});
