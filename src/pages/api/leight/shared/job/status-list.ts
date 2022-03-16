import {QueryEndpoint} from '@leight-core/server';
import {IJobStatus, IQuery} from "@leight-core/api";

export default QueryEndpoint<"StatusList", IQuery, IJobStatus>(async () => {
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
