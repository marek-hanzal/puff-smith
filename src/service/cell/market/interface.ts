import {ICell, ICellEntity, ICellQuery} from "@/puff-smith/service/cell/interface";
import {ISource} from "@leight-core/api";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketSource extends ISource<undefined, ICellEntity, ICellMarket, ICellQuery> {
}
