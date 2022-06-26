import {AtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/AtomizerCommentSource";
import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAtomizerCommentSource>({
	source: AtomizerCommentSource,
});
