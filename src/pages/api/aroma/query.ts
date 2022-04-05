import {AromaService, IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aromas", IAromaQuery, IAroma>(AromaService().handleQuery);
