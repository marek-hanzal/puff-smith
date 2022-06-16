import {IWireDrawSource} from "@/puff-smith/service/wire/draw/interface";
import {WireDrawSource} from "@/puff-smith/service/wire/draw/WireDrawSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IWireDrawSource>(WireDrawSource);
