import {AromaCommentSource} from "@/puff-smith/service/aroma/comment/AromaCommentSource";
import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AromaCommentCount", IAromaCommentSource>({
	source: AromaCommentSource,
});
