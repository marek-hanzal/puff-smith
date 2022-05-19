import {ofParams} from "@/puff-smith/service";
import {IWire, IWireQuery} from "@/puff-smith/service/wire/interface";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Wire", IWireQuery, IWire>(async params => WireRepository(ofParams(params)).handleQuery(params));
