import {AtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/AtomizerCommentSource";
import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AtomizerCommentCount", IAtomizerCommentSource>({
	source: AtomizerCommentSource,
});
