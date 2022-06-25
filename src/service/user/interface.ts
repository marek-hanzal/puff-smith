import {IWithCertificate} from "@/puff-smith/service/certificate/interface";
import {IWithLicense} from "@/puff-smith/service/license/interface";
import {IToken, IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IWithUserCertificate} from "@/puff-smith/service/user/certificate/interface";
import {IWithUserLicense} from "@/puff-smith/service/user/license/interface";
import {IWithUserToken} from "@/puff-smith/service/user/token/interface";
import {IQuery, ISource, IUser as ICoolUser} from "@leight-core/api";
import {Prisma, User} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

interface IUserQuery extends IQuery<Prisma.UserWhereInput, Prisma.UserOrderByWithRelationInput> {
}

export type IUserEntity<T = void> = T extends void ? User : User & T;
export type IWithUserEntity<T = void> = { user: IUserEntity<T>; };

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	tokens: IToken[];
	tokenIds: string[];
}

export interface IUserFetch {
	user: IUser;
}

export interface IUserFetchParams extends ParsedUrlQuery {
	userId: string;
}

export type IUserSourceEntity = IUserEntity<IWithUserLicense<IWithLicense<{ LicenseToken: IWithTokenEntity[] }>> & IWithUserCertificate<IWithCertificate<{ CertificateToken: IWithTokenEntity[] }>> & IWithUserToken<IWithTokenEntity>>;

export interface IUserSource extends ISource<undefined, IUserSourceEntity, IUser, IUserQuery, IUserFetch, IUserFetchParams> {
	handleRootUser(): Promise<any>;

	handleCommonUser(): Promise<any>;

	createToken(token: string): Promise<void>;

	asUser(userId?: string | null): Promise<ICoolUser>;
}
