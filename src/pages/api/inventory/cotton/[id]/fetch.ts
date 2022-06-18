import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Cotton", ICottonInventorySource>(CottonInventorySource);
