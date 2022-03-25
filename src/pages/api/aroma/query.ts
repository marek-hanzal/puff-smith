import {QueryEndpoint} from "@leight-core/server";
import {AromaService, IAroma, IAromaQuery} from "@/puff-smith/service/aroma";

export default QueryEndpoint<"Aromas", IAromaQuery, IAroma>(AromaService().handleQuery);
