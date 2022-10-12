import {ContainerPromise} from "@/puff-smith/service/Container";
import {JobStatusSource}  from "@/puff-smith/service/job/status/JobStatusSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "StatusList",
	container: ContainerPromise,
	source:    JobStatusSource,
});
