import {ServiceCreate} from "@/puff-smith/service";
import {ILiquid, ILiquidDelete} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", ILiquidDelete, ILiquid[]>(async ({request, toUserId}) => LiquidService(ServiceCreate(toUserId())).handleDelete({request}));
