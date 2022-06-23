import {IWireSource} from "@/puff-smith/service/wire/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IWireSource>({
	source: WireSource,
});
