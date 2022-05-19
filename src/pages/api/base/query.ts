import {ofRequest} from "@/puff-smith/service";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IBaseQuery, IBase>(async params => BaseRepository(ofRequest(params)).handleQuery(params));
