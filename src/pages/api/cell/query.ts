import {ofParams} from "@/puff-smith/service";
import {CellRepository} from "@/puff-smith/service/cell/CellRepository";
import {ICell, ICellQuery} from "@/puff-smith/service/cell/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cell", ICellQuery, ICell>(async params => CellRepository(ofParams(params)).handleQuery(params));
