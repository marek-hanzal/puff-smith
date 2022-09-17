import {ITagSource} from "@/puff-smith/service/tag/interface";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"TagCount", ITagSource>({
	source: TagSource,
});
