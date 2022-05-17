import {ofRequest} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IBaseQuery, IBase>(async params => BaseService(ofRequest(params)).handleQuery(params));
