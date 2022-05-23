import {AromaTasteSource} from "@/puff-smith/service/aroma/AromaTasteSource";
import {IAromaTasteSource} from "@/puff-smith/service/aroma/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Taste", IAromaTasteSource>(AromaTasteSource());
