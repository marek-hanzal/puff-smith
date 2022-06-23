import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IBuildSource>({
	source: BuildSource,
});
