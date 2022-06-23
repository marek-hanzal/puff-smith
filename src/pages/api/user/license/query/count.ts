import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {UserLicenseSource} from "@/puff-smith/service/user/license/UserLicenseSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"UserLicenseCount", IUserLicenseSource>({
	source: UserLicenseSource,
});
