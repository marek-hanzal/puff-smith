import {Prisma, User} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";
import {IToken} from "@/puff-smith/service/token";

export interface IUserCreate {
}

export interface IUserQuery extends IQuery<Prisma.UserWhereInput, Prisma.UserOrderByWithRelationInput> {
}

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	tokens: IToken[];

	hasToken(token: string): boolean;
}

export interface IUserFetchProps {
	user: IUser;
}

export interface IUserFetchQuery extends ParsedUrlQuery {
	userId: string;
}

export interface IUserService extends IRepositoryService<IUserCreate, User, IUser, IUserQuery, IUserFetchProps, IUserFetchQuery> {
	handleRootUser(userId: string): Promise<void>;

	handleCommonUser(userId: string): Promise<void>;

	createToken(userId: string, token: string): Promise<void>;
}
