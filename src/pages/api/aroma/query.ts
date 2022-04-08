import {AromaService, IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Aromas", IAromaQuery, IAroma>(AromaService().handleQuery);
