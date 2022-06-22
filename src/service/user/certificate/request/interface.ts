import {ICertificate, IWithCertificate} from "@/puff-smith/service/certificate/interface";
import {IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, UserCertificateRequest} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IUserCertificateRequestCreate {
	certificateId: string;
}

export interface IUserCertificateRequest {
	id: string;
	certificate: ICertificate;
	certificateId: string;
	userId: string;
	approverId?: string | null;
	created: string;
	updated?: string | null;
	status?: number | null;
}

export interface IUserCertificateRequestQuery extends IQuery<Prisma.UserCertificateRequestWhereInput, Prisma.UserCertificateRequestOrderByWithRelationInput> {
}

export type IUserCertificateRequestEntity<T = void> = T extends void ? UserCertificateRequest : UserCertificateRequest & T;
export type IWithUserCertificateRequest<T = void> = { UserCertificateRequest: IUserCertificateRequestEntity<T>[]; };

export interface IUserCertificateRequestFetch {
	userCertificateRequest: IUserCertificateRequest;
}

export interface IUserCertificateRequestFetchParams extends ParsedUrlQuery {
	userCertificateRequestId: string;
}

export interface IUserCertificateRequestSource extends ISource<IUserCertificateRequestCreate, IUserCertificateRequestEntity<IWithCertificate<{ CertificateToken: IWithTokenEntity[] }>>, IUserCertificateRequest, IUserCertificateRequestQuery, IUserCertificateRequestFetch, IUserCertificateRequestFetchParams> {
}
