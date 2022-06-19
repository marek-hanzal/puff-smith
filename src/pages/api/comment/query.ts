import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Comment", ICommentSource>(CommentSource);
