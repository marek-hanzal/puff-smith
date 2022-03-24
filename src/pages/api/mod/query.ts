import {QueryEndpoint} from "@leight-core/server";
import {IMod, IModQuery, ModService} from "@/puff-smith/service/mod";

export default QueryEndpoint<"Mods", IModQuery, IMod>(ModService().handleQuery);
