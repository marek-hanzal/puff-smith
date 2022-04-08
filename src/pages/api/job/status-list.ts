import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IBaseSelectOption, IJobStatus, IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

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
