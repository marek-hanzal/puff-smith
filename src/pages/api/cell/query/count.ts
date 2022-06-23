import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellSource} from "@/puff-smith/service/cell/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CellCount", ICellSource>({
	source: CellSource,
});
