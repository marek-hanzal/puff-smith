import {IUserLicenseRequestRequest} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"LicenseRequestApprove", IUserLicenseRequestRequest, any>({
	handler: async ({user, request}) => UserLicenseRequestSource().withUser(user).approve(request),
});
