import {ServiceCreate} from "@/puff-smith/service";
import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Liquid", ILiquidQuery, ILiquid>(async ({request, toUserId}) => LiquidService(ServiceCreate(toUserId())).handleQuery({request}));
