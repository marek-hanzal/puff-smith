import {QueryEndpoint} from '@leight-core/server';
import {IJobStatus} from "@leight-core/api";

export default QueryEndpoint<"StatusList", undefined, IJobStatus>(async () => {
	const items: IJobStatus[] = [
		'NEW',
		'FAILURE',
		'SUCCESS',
		'RUNNING',
		'REVIEW',
		'DONE',
	];
	return {
		total: items.length,
		count: items.length,
		items,
	};
});
