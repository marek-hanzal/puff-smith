import {ILiquidAromaSource} from "@/puff-smith/service/liquid/aroma/interface";
import {LiquidAromaSource} from "@/puff-smith/service/liquid/aroma/LiquidAromaSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", ILiquidAromaSource>(LiquidAromaSource());
