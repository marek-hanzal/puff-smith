import {ofRequest} from "@/puff-smith/service";
import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {LiquidRepository} from "@/puff-smith/service/liquid/LiquidRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Liquid", ILiquidQuery, ILiquid>(async params => LiquidRepository(ofRequest(params)).handleQuery(params));
