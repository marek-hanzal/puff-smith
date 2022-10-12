import {ContainerPromise} from "@/puff-smith/service/Container";
import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "Job",
	container: ContainerPromise,
	source:    JobSource,
});
