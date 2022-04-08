import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IMod, IModQuery, ModService} from "@/puff-smith/service/mod";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Mods", IModQuery, IMod>(ModService().handleQuery);
