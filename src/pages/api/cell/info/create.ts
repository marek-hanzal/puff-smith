import {CellInfoSource} from "@/puff-smith/service/cell/info/CellInfoSource";
import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICellInfoSource>({
	source: CellInfoSource,
});
