import {BuildCommentSource} from "@/puff-smith/service/build/comment/BuildCommentSource";
import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BuildComment", IBuildCommentSource>(BuildCommentSource);
