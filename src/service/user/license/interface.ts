import {ILicense, ILicenseSourceEntity} from "@/puff-smith/service/license/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, UserLicense} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IUserLicenseCreate {
	licenseId: string;
}

export interface IUserLicense {
	id: string;
	license: ILicense;
	licenseId: string;
	userId: string;
}

export interface IUserLicenseQuery extends IQuery<Prisma.UserLicenseWhereInput, Prisma.UserLicenseOrderByWithRelationInput> {
}

export type IUserLicenseEntity<T = void> = T extends void ? UserLicense : UserLicense & T;
export type IWithUserLicense<T = void> = { UserLicense: IUserLicenseEntity<T>[]; };

export interface IUserLicenseFetch {
	userLicense: IUserLicense;
}

export interface IUserLicenseFetchParams extends ParsedUrlQuery {
	userLicenseId: string;
}

export interface IUserLicenseSource extends ISource<IUserLicenseCreate, IUserLicenseEntity<{ license: ILicenseSourceEntity }>, IUserLicense, IUserLicenseQuery, IUserLicenseFetch, IUserLicenseFetchParams> {
}
