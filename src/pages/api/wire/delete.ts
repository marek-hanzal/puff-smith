import {IWireSource} from "@/puff-smith/service/wire/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IWireSource>(WireSource());
