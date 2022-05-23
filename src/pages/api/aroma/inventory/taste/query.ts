import {IAromaTasteSource} from "@/puff-smith/service/aroma/interface";
import {AromaTasteSource} from "@/puff-smith/service/aroma/inventory/AromaTasteSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Taste", IAromaTasteSource>(AromaTasteSource());
