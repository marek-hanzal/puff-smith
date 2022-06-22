import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"UserLicenseRequestCount", IUserLicenseRequestSource>(UserLicenseRequestSource);
