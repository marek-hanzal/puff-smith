import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, ISource} from "@leight-core/api";
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

export interface IVoucherSourceCreate extends IServiceCreate {
}

export interface IVoucherSource extends ISource<IVoucherCreate, Voucher, IVoucher, IVoucherQuery, IVoucherFetchProps, IVoucherFetchQuery> {
}
