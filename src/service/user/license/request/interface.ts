import {ILicense, IWithLicense} from "@/puff-smith/service/license/interface";
import {IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IUser, IWithNullUser} from "@/puff-smith/service/user/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, UserLicenseRequest} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IUserLicenseRequestCreate {
	licenseId: string;
}

export interface IUserLicenseRequest {
	id: string;
	license: ILicense;
	licenseId: string;
	userId: string;
	user?: IUser | null;
	approverId?: string | null;
	created: string;
	updated?: string | null;
	status?: number | null;
}

export interface IUserLicenseRequestQuery extends IQuery<Prisma.UserLicenseRequestWhereInput, Prisma.UserLicenseRequestOrderByWithRelationInput> {
}

export type IUserLicenseRequestEntity<T = void> = T extends void ? UserLicenseRequest : UserLicenseRequest & T;
export type IWithUserLicenseRequest<T = void> = { UserLicenseRequest: IUserLicenseRequestEntity<T>[]; };

export interface IUserLicenseRequestFetch {
	userLicenseRequest: IUserLicenseRequest;
}

export interface IUserLicenseRequestFetchParams extends ParsedUrlQuery {
	userLicenseRequestId: string;
}

export type IUserLicenseRequestRequest = {
	id: string;
}

export type IUserLicenseRequestSourceEntity = IUserLicenseRequestEntity<IWithNullUser & IWithLicense<{ LicenseToken: IWithTokenEntity[] }>>;

export interface IUserLicenseRequestSource extends ISource<IUserLicenseRequestCreate, IUserLicenseRequestSourceEntity, IUserLicenseRequest, IUserLicenseRequestQuery, IUserLicenseRequestFetch, IUserLicenseRequestFetchParams> {
	approve(request: IUserLicenseRequestRequest): Promise<any>;

	decline(request: IUserLicenseRequestRequest): Promise<any>;
}
