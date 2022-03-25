import {QueryEndpoint} from "@leight-core/server";
import {BaseService, IBase, IBaseQuery} from "@/puff-smith/service/base";

export default QueryEndpoint<"Bases", IBaseQuery, IBase>(BaseService().handleQuery);
