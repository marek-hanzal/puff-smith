import {IBaseSelectOption, IJobStatus, IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

const items: IJobStatus[] = [
	"NEW",
	"RUNNING",
	"FAILURE",
	"SUCCESS",
	"REVIEW",
	"DONE",
];

export default QueryEndpoint<"StatusList", IQuery, IBaseSelectOption>(async () => ({
	total: items.length,
	count: items.length,
	items: items.map(item => ({
		value: item,
		label: item,
	})),
}));
