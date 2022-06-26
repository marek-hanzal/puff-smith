import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellSource} from "@/puff-smith/service/cell/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICellSource>({
	source: CellSource,
});
