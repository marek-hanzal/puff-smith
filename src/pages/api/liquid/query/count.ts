import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"LiquidCount", ILiquidSource>(LiquidSource());
