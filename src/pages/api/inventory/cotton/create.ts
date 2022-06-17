import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICottonInventorySource>(CottonInventorySource);
