import {BaseService, IBase, IBaseQuery} from "@/puff-smith/service/base";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Bases", IBaseQuery, IBase>(BaseService().handleQuery);
