import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellSource} from "@/puff-smith/service/cell/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICellSource>({
	source: CellSource,
});
