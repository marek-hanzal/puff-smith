import {Prisma, User} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";

export interface IUserCreate {
}

export interface IUserQuery extends IQuery<Prisma.UserWhereInput, Prisma.UserOrderByWithRelationInput> {
}

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

export interface IUserFetchProps {
	user: IUser;
}

export interface IUserFetchQuery extends ParsedUrlQuery {
	userId: string;
}

export type IUserService = IRepositoryService<IUserCreate, User, IUser, IUserQuery, IUserFetchProps, IUserFetchQuery>;
