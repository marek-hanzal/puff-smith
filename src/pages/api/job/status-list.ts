import {asyncContainer}  from "@/puff-smith/service/Container";
import {JobStatusSource} from "@/puff-smith/service/job/status/JobStatusSource";
import {QueryEndpoint}   from "@leight-core/server";

export default QueryEndpoint({
	name:      "StatusList",
	container: asyncContainer,
	source:    JobStatusSource,
});
