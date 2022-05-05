import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aromas", IAromaQuery, IAroma>(async ({request, toUserId}) => AromaService(ServiceCreate(toUserId())).handleQuery({request}), cache);
