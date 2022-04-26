import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Bases", IBaseQuery, IBase>(BaseService().handleQuery);
