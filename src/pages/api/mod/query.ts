import {IMod, IModQuery} from "@/puff-smith/service/mod/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mods", IModQuery, IMod>(ModService().handleQuery, cache);
