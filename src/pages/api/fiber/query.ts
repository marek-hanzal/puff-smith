import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import {IFiberSource} from "@/puff-smith/service/fiber/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Fiber", IFiberSource>(FiberSource);
