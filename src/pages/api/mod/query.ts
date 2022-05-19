import {ofRequest} from "@/puff-smith/service";
import {IMod, IModQuery} from "@/puff-smith/service/mod/interface";
import {ModRepository} from "@/puff-smith/service/mod/ModRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mod", IModQuery, IMod>(async params => ModRepository(ofRequest(params)).handleQuery(params));
