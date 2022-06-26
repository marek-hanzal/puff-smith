import {CellInfoSource} from "@/puff-smith/service/cell/info/CellInfoSource";
import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICellInfoSource>({
	source: CellInfoSource,
});
