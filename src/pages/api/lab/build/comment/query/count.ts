import {BuildCommentSource} from "@/puff-smith/service/build/comment/BuildCommentSource";
import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BuildCommentCount", IBuildCommentSource>({
	source: BuildCommentSource,
});
