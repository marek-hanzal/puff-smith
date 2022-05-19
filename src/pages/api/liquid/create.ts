import {ofParams} from "@/puff-smith/service";
import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidRepository} from "@/puff-smith/service/liquid/LiquidRepository";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ILiquidCreate, ILiquid>(async params => handlePuffiesException(params, async () => LiquidRepository(ofParams(params)).handleCreate(params)));
