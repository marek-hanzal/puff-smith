import {asyncContainer} from "@/puff-smith/service/Container";
import {JobSource}      from "@/puff-smith/service/job/JobSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "Job",
	container: asyncContainer,
	source:    JobSource,
});
