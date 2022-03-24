import {QueryEndpoint} from "@leight-core/server";
import {CellService, ICell, ICellQuery} from "@/puff-smith/service/cell";

export default QueryEndpoint<"Cells", ICellQuery, ICell>(CellService().handleQuery);
