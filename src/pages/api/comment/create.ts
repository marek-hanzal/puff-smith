import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICommentSource>(CommentSource);
