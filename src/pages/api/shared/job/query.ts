import {QueryEndpoint} from "@leight-core/server";
import {IJob, IQuery} from "@leight-core/api";

export default QueryEndpoint<"Jobs", IQuery, IJob[]>(async params => {
	return {
		count: 0,
		pages: 0,
		total: 0,
		size: 10,
		items: [],
	}
});
