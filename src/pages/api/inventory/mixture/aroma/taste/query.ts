import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
import {AromaTasteSource} from "@/puff-smith/service/mixture/inventory/aroma/taste/AromaTasteSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaTaste", IAromaTasteSource>(AromaTasteSource);
