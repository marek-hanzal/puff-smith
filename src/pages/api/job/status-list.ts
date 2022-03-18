import {QueryEndpoint} from '@leight-core/server';
import {IBaseSelectOption, IJobStatus, IQuery} from "@leight-core/api";

export default QueryEndpoint<"StatusList", IQuery, IBaseSelectOption>(async () => {
	const items: IJobStatus[] = [
		'NEW',
		'RUNNING',
		'FAILURE',
		'SUCCESS',
		'REVIEW',
		'DONE',
	];
	return {
		total: items.length,
		count: items.length,
		items: items.map(item => ({
			value: item,
			label: item,
		})),
	};
});