import {CommentSource} from "@/puff-smith/service/comment/CommentSource";
import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CommentCount", ICommentSource>(CommentSource);
