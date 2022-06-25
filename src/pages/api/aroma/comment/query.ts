import {AromaCommentSource} from "@/puff-smith/service/aroma/comment/AromaCommentSource";
import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaComment", IAromaCommentSource>({
	source: AromaCommentSource,
});
