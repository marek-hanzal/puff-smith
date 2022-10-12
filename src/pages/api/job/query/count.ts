import {ContainerPromise} from "@/puff-smith/service/Container";
import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {CountEndpoint}    from "@leight-core/server";

export default CountEndpoint({
	name:      "JobCount",
	container: ContainerPromise,
	source:    JobSource,
});
