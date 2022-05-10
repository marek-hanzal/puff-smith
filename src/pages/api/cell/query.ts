import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICell, ICellQuery} from "@/puff-smith/service/cell/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cells", ICellQuery, ICell>(CellService().handleQuery);
