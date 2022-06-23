import {ITagSource} from "@/puff-smith/service/tag/interface";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITagSource>({
	source: TagSource,
});
