import {asyncContainer} from "@/puff-smith/service/Container";
import {TagSource}      from "@/puff-smith/service/tag/TagSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "Tag",
	container: asyncContainer,
	source:    TagSource,
});
