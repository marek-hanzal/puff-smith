import {AromaCommentSource} from "@/puff-smith/service/aroma/comment/AromaCommentSource";
import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAromaCommentSource>({
	source: AromaCommentSource,
});
