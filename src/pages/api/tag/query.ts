import {ITagSource}    from "@/puff-smith/service/tag/interface";
import {TagSource}     from "@/puff-smith/service/tag/TagSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Tag", ITagSource>({
	source: TagSource,
});
