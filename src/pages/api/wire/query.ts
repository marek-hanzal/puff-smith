import {IWireSource} from "@/puff-smith/service/wire/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Wire", IWireSource>(WireSource);
