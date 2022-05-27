import {IWireSource} from "@/puff-smith/service/wire/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"WireCount", IWireSource>(WireSource());
