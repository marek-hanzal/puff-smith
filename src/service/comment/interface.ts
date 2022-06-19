import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Comment, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICommentCreate {
	comment: string;
}

export interface ICommentQuery extends IQuery<Prisma.CommentWhereInput & IWithFulltext, Prisma.CommentOrderByWithRelationInput> {
}

export type ICommentEntity = Comment;
export type IWithComment = { comment: ICommentEntity };

export interface IComment {
	id: string;
	comment: string;
	created: string;
}

export interface ICommentFetch {
	comment: IComment;
}

export interface ICommentFetchParams extends ParsedUrlQuery {
	commentId: string;
}

export interface ICommentSource extends ISource<ICommentCreate, ICommentEntity, IComment, ICommentQuery, ICommentFetch, ICommentFetchParams> {
}
