import {IUserLicenseRequestRequest} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"LicenseRequestDecline", IUserLicenseRequestRequest, any>(async ({user, request}) => UserLicenseRequestSource().withUser(user).decline(request));
