import {CoilDrawSource} from "@/puff-smith/service/coil/inventory/draw/CoilDrawSource";
import {ICoilDrawSource} from "@/puff-smith/service/coil/inventory/draw/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", ICoilDrawSource>(CoilDrawSource());
