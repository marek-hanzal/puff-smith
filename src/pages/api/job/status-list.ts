import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
import {JobStatusSource}  from "@/puff-smith/service/job/status/JobStatusSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint<"StatusList", IJobStatusSource>({
	source: JobStatusSource,
});
