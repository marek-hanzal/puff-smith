import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilSource} from "@/puff-smith/service/coil/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICoilSource>({
	source: CoilSource,
});
