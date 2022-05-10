import {ServiceCreate} from "@/puff-smith/service";
import {IMixture, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureQuery, IMixture>(async params => MixtureService(ServiceCreate(params.toUserId())).handleQuery(params));
