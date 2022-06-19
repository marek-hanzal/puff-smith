import {BuildCommentSource} from "@/puff-smith/service/build/comment/BuildCommentSource";
import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBuildCommentSource>(BuildCommentSource);
