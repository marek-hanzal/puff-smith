import {IMixtureInfo, IToMixtureInfoRequest, toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureInfo", IToMixtureInfoRequest, IMixtureInfo>({
	handler: async ({request}) => toMixtureInfo(request),
});
