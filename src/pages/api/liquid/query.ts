import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ILiquid, ILiquidQuery, LiquidService} from "@/puff-smith/service/liquid";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Liquids", ILiquidQuery, ILiquid>(LiquidService().handleQuery);
