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

export default QueryEndpoint<"StatusList", IQuery, IBaseSelectOption>(async () => items.map(item => ({
	value: item,
	label: item,
})));
