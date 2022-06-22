import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"UserLicenseRequest", IUserLicenseRequestSource>(UserLicenseRequestSource);
