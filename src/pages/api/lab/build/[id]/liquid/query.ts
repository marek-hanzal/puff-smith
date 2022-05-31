import {BuildLiquidSource} from "@/puff-smith/service/build/liquid/BuildLiquidSource";
import {IBuildLiquidSource} from "@/puff-smith/service/build/liquid/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BuildLiquid", IBuildLiquidSource, { id: string }>(({query: {id}}) => BuildLiquidSource(id));
