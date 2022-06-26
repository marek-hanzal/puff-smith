import {IComment, IWithComment} from "@/puff-smith/service/comment/interface";
import {IWithUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AtomizerInventoryComment, Prisma} from "@prisma/client";

export interface IAtomizerInventoryCommentCreate {
	comment: string;
	atomizerInventoryId: string;
}

export interface IAtomizerInventoryCommentQuery extends IQuery<Prisma.AtomizerInventoryCommentWhereInput, Prisma.AtomizerInventoryCommentOrderByWithRelationInput> {
}

export type IAtomizerInventoryCommentEntity<T = void> = T extends void ? AtomizerInventoryComment : AtomizerInventoryComment & T;

export interface IAtomizerInventoryComment {
	id: string;
	comment: IComment;
	commentId: string;
	atomizerInventoryId: string;
}

export type IAtomizerInventoryCommentSourceEntity = IAtomizerInventoryCommentEntity<IWithComment<IWithUser>>;

export interface IAtomizerInventoryCommentSource extends ISource<IAtomizerInventoryCommentCreate, IAtomizerInventoryCommentSourceEntity, IAtomizerInventoryComment, IAtomizerInventoryCommentQuery> {
}
