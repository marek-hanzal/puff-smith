import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma, Voucher} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherCreate {
	name: string;
	cost: number;
	maxFortune?: number;
}

export interface IVoucherQuery extends IQuery<Prisma.VoucherWhereInput & IWithFulltext, Prisma.VoucherOrderByWithRelationInput> {
}

export type IVoucherEntity<T = any> = Voucher & T;
export type IWithVoucher<T = any> = { voucher: IVoucherEntity<T>; };

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

export interface IVoucherSource extends ISource<IVoucherCreate, IVoucherEntity, IVoucher, IVoucherQuery> {
}
