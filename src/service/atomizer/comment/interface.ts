import {IComment, IWithComment} from "@/puff-smith/service/comment/interface";
import {IWithUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AtomizerComment, Prisma} from "@prisma/client";

export interface IAtomizerCommentCreate {
	comment: string;
	atomizerId: string;
}

export interface IAtomizerCommentQuery extends IQuery<Prisma.AtomizerCommentWhereInput, Prisma.AtomizerCommentOrderByWithRelationInput> {
}

export type IAtomizerCommentEntity<T = void> = T extends void ? AtomizerComment : AtomizerComment & T;

export interface IAtomizerComment {
	id: string;
	comment: IComment;
	commentId: string;
	atomizerId: string;
}

export type IAtomizerCommentSourceEntity = IAtomizerCommentEntity<IWithComment<IWithUser>>;

export interface IAtomizerCommentSource extends ISource<IAtomizerCommentCreate, IAtomizerCommentSourceEntity, IAtomizerComment, IAtomizerCommentQuery> {
}
