import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBuildSource>({
	source: BuildSource,
});
