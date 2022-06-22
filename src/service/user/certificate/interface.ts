import {ICertificate, IWithCertificate} from "@/puff-smith/service/certificate/interface";
import {IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, UserCertificate} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IUserCertificateCreate {
	certificateId: string;
}

export interface IUserCertificate {
	id: string;
	certificate: ICertificate;
	certificateId: string;
	userId: string;
}

export interface IUserCertificateQuery extends IQuery<Prisma.UserCertificateWhereInput, Prisma.UserCertificateOrderByWithRelationInput> {
}

export type IUserCertificateEntity<T = void> = T extends void ? UserCertificate : UserCertificate & T;
export type IWithUserCertificate<T = void> = { UserCertificate: IUserCertificateEntity<T>[]; };
export type IWithNullUserCertificate<T = void> = { UserCertificate?: IUserCertificateEntity<T>[]; };

export interface IUserCertificateFetch {
	userCertificate: IUserCertificate;
}

export interface IUserCertificateFetchParams extends ParsedUrlQuery {
	userCertificateId: string;
}

export interface IUserCertificateSource extends ISource<IUserCertificateCreate, IUserCertificateEntity<IWithCertificate<{ CertificateToken: IWithTokenEntity[] }>>, IUserCertificate, IUserCertificateQuery, IUserCertificateFetch, IUserCertificateFetchParams> {
}
