import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Build", IBuildSource>({
	source: BuildSource,
});
