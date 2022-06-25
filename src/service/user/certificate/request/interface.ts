import {ICertificate, IWithCertificate} from "@/puff-smith/service/certificate/interface";
import {IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IUser, IWithNullUser} from "@/puff-smith/service/user/interface";
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
	user?: IUser | null;
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

export type IUserCertificateRequestRequest = {
	id: string;
}

export type IUserCertificateRequestSourceEntity = IUserCertificateRequestEntity<IWithNullUser & IWithCertificate<{ CertificateToken: IWithTokenEntity[] }>>;

export interface IUserCertificateRequestSource extends ISource<IUserCertificateRequestCreate, IUserCertificateRequestSourceEntity, IUserCertificateRequest, IUserCertificateRequestQuery, IUserCertificateRequestFetch, IUserCertificateRequestFetchParams> {
	approve(request: IUserCertificateRequestRequest): Promise<any>;

	decline(request: IUserCertificateRequestRequest): Promise<any>;
}
