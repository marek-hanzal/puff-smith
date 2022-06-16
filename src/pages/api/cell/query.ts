import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellSource} from "@/puff-smith/service/cell/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cell", ICellSource>(CellSource);
