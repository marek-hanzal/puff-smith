import {CellTypeSource} from "@/puff-smith/service/cell/type/CellTypeSource";
import {ICellTypeSource} from "@/puff-smith/service/cell/type/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellType", ICellTypeSource>(CellTypeSource());
