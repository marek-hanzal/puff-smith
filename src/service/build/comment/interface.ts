import {IComment, IWithComment} from "@/puff-smith/service/comment/interface";
import {IWithUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource} from "@leight-core/api";
import {BuildComment, Prisma} from "@prisma/client";

export interface IBuildCommentCreate {
	comment: string;
	buildId: string;
}

export interface IBuildCommentQuery extends IQuery<Prisma.BuildCommentWhereInput, Prisma.BuildCommentOrderByWithRelationInput> {
}

export type IBuildCommentEntity<T = void> = T extends void ? BuildComment : BuildComment & T;

export interface IBuildComment {
	id: string;
	comment: IComment;
	commentId: string;
	buildId: string;
}

export type IBuildCommentSourceEntity = IBuildCommentEntity<IWithComment<IWithUser>>;

export interface IBuildCommentSource extends ISource<IBuildCommentCreate, IBuildCommentSourceEntity, IBuildComment, IBuildCommentQuery> {
}
