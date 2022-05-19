import {ofParams} from "@/puff-smith/service";
import {ILiquid, ILiquidDelete} from "@/puff-smith/service/liquid/interface";
import {LiquidRepository} from "@/puff-smith/service/liquid/LiquidRepository";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ILiquidDelete, ILiquid[]>(async params => LiquidRepository(ofParams(params)).handleDelete(params));
