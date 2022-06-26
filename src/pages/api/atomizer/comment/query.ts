import {AtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/AtomizerCommentSource";
import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerComment", IAtomizerCommentSource>({
	source: AtomizerCommentSource,
});
