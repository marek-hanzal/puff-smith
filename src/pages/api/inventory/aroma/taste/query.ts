import {AromaTasteSource} from "@/puff-smith/service/aroma/inventory/taste/AromaTasteSource";
import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaTaste", IAromaTasteSource>(AromaTasteSource);
