import {AtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/AtomizerCommentSource";
import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAtomizerCommentSource>({
	source: AtomizerCommentSource,
});
