import {IMixture, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixtures", IMixtureQuery, IMixture>(async params => MixtureService(params.toUserId()).handleQuery(params));
