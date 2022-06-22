import {IToken, IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IWithNullUserCertificate} from "@/puff-smith/service/user/certificate/interface";
import {IUserCertificateRequest, IUserCertificateRequestEntity} from "@/puff-smith/service/user/certificate/request/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Certificate, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICertificateCreate {
	name: string;
	code?: string;
	cost?: number;
	tokens?: string[];
}

export interface ICertificateQuery extends IQuery<Prisma.CertificateWhereInput & IWithFulltext, Prisma.CertificateOrderByWithRelationInput> {
}

export type ICertificateEntity<T = void> = T extends void ? Certificate : Certificate & T;
export type IWithCertificate<T = void> = { certificate: ICertificateEntity<T>; };
export type IWithNullCertificate<T = void> = { certificate?: ICertificateEntity<T> | null; };

export interface ICertificate {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	tokens: IToken[];
	isOwned?: boolean;
	request?: IUserCertificateRequest | null;
}

export interface ICertificateFetch {
	certificate: ICertificate;
}

export interface ICertificateFetchParams extends ParsedUrlQuery {
	certificateId: string;
}

export type ICertificateSourceEntity = ICertificateEntity<{
	CertificateToken: IWithTokenEntity[];
} & IWithNullUserCertificate & {
	UserCertificateRequest?: IUserCertificateRequestEntity<IWithCertificate<{ CertificateToken: IWithTokenEntity[] }>>[];
}>;

export interface ICertificateSource extends ISource<ICertificateCreate, ICertificateSourceEntity, ICertificate, ICertificateQuery, ICertificateFetch, ICertificateFetchParams> {
}
