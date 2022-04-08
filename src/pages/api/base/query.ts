import {BaseService, IBase, IBaseQuery} from "@/puff-smith/service/base";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Bases", IBaseQuery, IBase>(BaseService().handleQuery);
