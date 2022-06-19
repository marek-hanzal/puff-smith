import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Certificate, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICertificateCreate {
	name: string;
	code?: string;
	cost?: number;
}

export interface ICertificateQuery extends IQuery<Prisma.CertificateWhereInput & IWithFulltext, Prisma.CertificateOrderByWithRelationInput> {
}

export type ICertificateEntity = Certificate;
export type IWithCertificate = { certificate: ICertificateEntity };

export interface ICertificate {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
}

export interface ICertificateFetch {
	certificate: ICertificate;
}

export interface ICertificateFetchParams extends ParsedUrlQuery {
	certificateId: string;
}

export interface ICertificateSource extends ISource<ICertificateCreate, ICertificateEntity, ICertificate, ICertificateQuery, ICertificateFetch, ICertificateFetchParams> {
}
