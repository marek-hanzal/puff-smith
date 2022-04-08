import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CellService, ICell, ICellQuery} from "@/puff-smith/service/cell";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Cells", ICellQuery, ICell>(CellService().handleQuery);
