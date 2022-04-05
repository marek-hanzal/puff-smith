import {CellService, ICell, ICellQuery} from "@/puff-smith/service/cell";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cells", ICellQuery, ICell>(CellService().handleQuery);
