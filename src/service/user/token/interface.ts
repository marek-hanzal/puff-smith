import {Prisma, UserToken} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";
import {IUser} from "@/puff-smith/service/user";
import {IToken} from "@/puff-smith/service/token";

export interface IUserTokenCreate {
	userId: string;
	tokenId: string;
}

export interface IUserTokenQuery extends IQuery<Prisma.UserTokenWhereInput, Prisma.UserTokenOrderByWithRelationInput> {
}

export interface IUserToken {
	id: string;
	user: IUser;
	token: IToken;
}

export interface IUserTokenFetchProps {
	userToken: IUserToken;
}

export interface IUserTokenFetchQuery extends ParsedUrlQuery {
	userTokenId: string;
}

export interface IUserTokenService extends IRepositoryService<IUserTokenCreate, UserToken, IUserToken, IUserTokenQuery, IUserTokenFetchProps, IUserTokenFetchQuery> {
}
