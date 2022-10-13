import {asyncContainer} from "@/puff-smith/service/Container";
import {TagSource}      from "@/puff-smith/service/tag/TagSource";
import {CountEndpoint}  from "@leight-core/viv";

export default CountEndpoint({
	name:      "TagCount",
	container: asyncContainer,
	source:    TagSource,
});
