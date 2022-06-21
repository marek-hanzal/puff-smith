import {IToken, IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {License, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILicenseCreate {
	name: string;
	code?: string;
	cost?: number;
	renew?: number;
	duration?: number;
	tokens?: string[];
}

export interface ILicenseQuery extends IQuery<Prisma.LicenseWhereInput & IWithFulltext, Prisma.LicenseOrderByWithRelationInput> {
}

export type ILicenseEntity<T = void> = T extends void ? License : License & T;
export type IWithLicense<T = void> = { license: ILicenseEntity<T>; };

export interface ILicense {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	renew?: number | null;
	duration?: number | null;
	tokens: IToken[];
}

export interface ILicenseFetch {
	license: ILicense;
}

export interface ILicenseFetchParams extends ParsedUrlQuery {
	licenseId: string;
}

export type ILicenseSourceEntity = ILicenseEntity<{ LicenseToken: IWithTokenEntity[]; }>;

export interface ILicenseSource extends ISource<ILicenseCreate, ILicenseSourceEntity, ILicense, ILicenseQuery, ILicenseFetch, ILicenseFetchParams> {
}
