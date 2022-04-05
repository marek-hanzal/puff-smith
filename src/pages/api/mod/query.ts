import {IMod, IModQuery, ModService} from "@/puff-smith/service/mod";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mods", IModQuery, IMod>(ModService().handleQuery);
