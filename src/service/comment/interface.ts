import {IUser, IWithUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Comment, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICommentCreate {
	comment: string;
}

export interface ICommentQuery extends IQuery<Prisma.CommentWhereInput & IWithFulltext, Prisma.CommentOrderByWithRelationInput> {
}

export type ICommentEntity<T = void> = T extends void ? Comment : Comment & T;
export type IWithComment<T = void> = { comment: ICommentEntity<T>; };

export interface IComment {
	id: string;
	comment: string;
	created: string;
	user: IUser;
}

export interface ICommentFetch {
	comment: IComment;
}

export interface ICommentFetchParams extends ParsedUrlQuery {
	commentId: string;
}

export type ICommentSourceEntity = ICommentEntity<IWithUser>;

export interface ICommentSource extends ISource<ICommentCreate, ICommentSourceEntity, IComment, ICommentQuery, ICommentFetch, ICommentFetchParams> {
}
