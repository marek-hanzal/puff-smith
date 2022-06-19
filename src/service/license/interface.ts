import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {License, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILicenseCreate {
	name: string;
	code?: string;
	cost?: number;
	renew?: number;
	duration?: number;
}

export interface ILicenseQuery extends IQuery<Prisma.LicenseWhereInput & IWithFulltext, Prisma.LicenseOrderByWithRelationInput> {
}

export type ILicenseEntity = License;
export type IWithLicense = { license: ILicenseEntity };

export interface ILicense {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	renew?: number | null;
	duration?: number | null;
}

export interface ILicenseFetch {
	license: ILicense;
}

export interface ILicenseFetchParams extends ParsedUrlQuery {
	licenseId: string;
}

export interface ILicenseSource extends ISource<ILicenseCreate, ILicenseEntity, ILicense, ILicenseQuery, ILicenseFetch, ILicenseFetchParams> {
}
