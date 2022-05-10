import {IWire, IWireQuery} from "@/puff-smith/service/wire/interface";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Wires", IWireQuery, IWire>(WireService().handleQuery);
