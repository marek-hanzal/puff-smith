import {AromaCommentSource} from "@/puff-smith/service/aroma/comment/AromaCommentSource";
import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaCommentSource>({
	source: AromaCommentSource,
});
