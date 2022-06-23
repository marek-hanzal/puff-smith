import {BuildCommentSource} from "@/puff-smith/service/build/comment/BuildCommentSource";
import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBuildCommentSource>({
	source: BuildCommentSource,
});
