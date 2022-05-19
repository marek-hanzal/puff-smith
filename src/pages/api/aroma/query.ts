import {ofRequest} from "@/puff-smith/service";
import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", IAromaQuery, IAroma>(async params => AromaRepository(ofRequest(params)).handleQuery(params));
