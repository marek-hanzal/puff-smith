import {BuildLiquidSource} from "@/puff-smith/service/build/liquid/BuildLiquidSource";
import {IBuildLiquidSource} from "@/puff-smith/service/build/liquid/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BuildLiquidCount", IBuildLiquidSource, { id: string }>({
	source: ({query: {id}}) => BuildLiquidSource(id),
});
