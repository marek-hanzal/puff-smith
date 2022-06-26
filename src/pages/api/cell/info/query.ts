import {CellInfoSource} from "@/puff-smith/service/cell/info/CellInfoSource";
import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellInfo", ICellInfoSource>({
	source: CellInfoSource,
});
