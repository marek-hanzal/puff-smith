import {ILiquidBaseSource} from "@/puff-smith/service/liquid/base/interface";
import {LiquidBaseSource} from "@/puff-smith/service/liquid/base/LiquidBaseSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", ILiquidBaseSource>(LiquidBaseSource());
