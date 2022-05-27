import {ICell, ICellEntity, ICellQuery, IWithCellType} from "@/puff-smith/service/cell/interface";
import {IWithCellInventory} from "@/puff-smith/service/cell/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketSource extends ISource<undefined, ICellEntity<IWithVendor & IWithCellInventory & IWithCellType>, ICellMarket, ICellQuery> {
}
