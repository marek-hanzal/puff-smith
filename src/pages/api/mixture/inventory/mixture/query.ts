import {ServiceCreate} from "@/puff-smith/service";
import {IMixture, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixtures", IMixtureQuery, IMixture>(async ({request: {filter, ...request}, toUserId}) => MixtureService(ServiceCreate(toUserId())).handleQuery({
	request: {
		filter: {
			...filter,
			error: null,
			ownedByCurrentUser: true,
		},
		...request,
	}
}));
