import {IComment, IWithComment} from "@/puff-smith/service/comment/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AromaInventoryComment, Prisma} from "@prisma/client";

export interface IAromaInventoryCommentCreate {
	comment: string;
	aromaInventoryId: string;
}

export interface IAromaInventoryCommentQuery extends IQuery<Prisma.AromaInventoryCommentWhereInput, Prisma.AromaInventoryCommentOrderByWithRelationInput> {
}

export type IAromaInventoryCommentEntity<T = void> = T extends void ? AromaInventoryComment : AromaInventoryComment & T;

export interface IAromaInventoryComment {
	id: string;
	comment: IComment;
	commentId: string;
	aromaInventoryId: string;
}

export interface IAromaInventoryCommentSource extends ISource<IAromaInventoryCommentCreate, IAromaInventoryCommentEntity<IWithComment>, IAromaInventoryComment, IAromaInventoryCommentQuery> {
}
