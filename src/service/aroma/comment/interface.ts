import {IComment, IWithComment} from "@/puff-smith/service/comment/interface";
import {IWithUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AromaComment, Prisma} from "@prisma/client";

export interface IAromaCommentCreate {
	comment: string;
	aromaId: string;
}

export interface IAromaCommentQuery extends IQuery<Prisma.AromaCommentWhereInput, Prisma.AromaCommentOrderByWithRelationInput> {
}

export type IAromaCommentEntity<T = void> = T extends void ? AromaComment : AromaComment & T;

export interface IAromaComment {
	id: string;
	comment: IComment;
	commentId: string;
	aromaId: string;
}

export type IAromaCommentSourceEntity = IAromaCommentEntity<IWithComment<IWithUser>>;

export interface IAromaCommentSource extends ISource<IAromaCommentCreate, IAromaCommentSourceEntity, IAromaComment, IAromaCommentQuery> {
}
