import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Liquid", ILiquidSource>(LiquidSource);
