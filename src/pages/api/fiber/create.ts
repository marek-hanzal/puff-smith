import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import {IFiberSource} from "@/puff-smith/service/fiber/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IFiberSource>(FiberSource);
