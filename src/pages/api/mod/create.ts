import {IModSource} from "@/puff-smith/service/mod/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IModSource>({
	source: ModSource,
});
