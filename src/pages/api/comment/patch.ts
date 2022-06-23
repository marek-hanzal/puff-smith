import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", ICommentSource>({
	source: CommentSource,
});
