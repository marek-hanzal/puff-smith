import {IServiceCreate} from "@/puff-smith/service";
import {IToken} from "@/puff-smith/service/token/interface";
import {IUser} from "@/puff-smith/service/user/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Prisma, UserToken} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

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

export interface IUserTokenRepositoryCreate extends IServiceCreate {
}

export interface IUserTokenRepository extends IRepository<IUserTokenCreate, UserToken, IUserToken, IUserTokenQuery, IUserTokenFetchProps, IUserTokenFetchQuery> {
}
