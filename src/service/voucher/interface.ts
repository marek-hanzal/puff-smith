import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, IRepository} from "@leight-core/api";
import {Prisma, Voucher} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherCreate {
	name: string;
	cost: number;
	maxFortune?: number;
}

export interface IVoucherQuery extends IQuery<Prisma.VoucherWhereInput, Prisma.VoucherOrderByWithRelationInput> {
}

export interface IVoucher {
	id: string;
	name: string;
	cost: number;
	maxFortune?: number | null;
}

export interface IVoucherFetchProps {
	voucher: IVoucher;
}

export interface IVoucherFetchQuery extends ParsedUrlQuery {
	voucherId: string;
}

export interface IVoucherRepositoryCreate extends IServiceCreate {
}

export interface IVoucherRepository extends IRepository<IVoucherCreate, Voucher, IVoucher, IVoucherQuery, IVoucherFetchProps, IVoucherFetchQuery> {
}
