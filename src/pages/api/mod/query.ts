import {IMod, IModQuery} from "@/puff-smith/service/mod/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mod", IModQuery, IMod>(ModService().handleQuery);
