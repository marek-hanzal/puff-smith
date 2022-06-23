import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import {IFiberSource} from "@/puff-smith/service/fiber/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"FiberCount", IFiberSource>({
	source: FiberSource,
});
