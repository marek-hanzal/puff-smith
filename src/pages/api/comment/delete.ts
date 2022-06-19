import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICommentSource>(CommentSource);
