import {CellInfoSource} from "@/puff-smith/service/cell/info/CellInfoSource";
import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CellInfoCount", ICellInfoSource>({
	source: CellInfoSource,
});
