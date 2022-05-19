import {defaults} from "@/puff-smith/service";
import {IMixture, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureQuery, IMixture>(async params => MixtureRepository(defaults(params.toUserId())).handleQuery(params));
