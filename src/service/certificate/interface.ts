import {IToken, IWithTokenEntity} from "@/puff-smith/service/token/interface";
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

export interface ICertificate {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	tokens: IToken[];
}

export interface ICertificateFetch {
	certificate: ICertificate;
}

export interface ICertificateFetchParams extends ParsedUrlQuery {
	certificateId: string;
}

export interface ICertificateSource extends ISource<ICertificateCreate, ICertificateEntity<{ CertificateToken: IWithTokenEntity[]; }>, ICertificate, ICertificateQuery, ICertificateFetch, ICertificateFetchParams> {
}
