import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {UserLicenseSource} from "@/puff-smith/service/user/license/UserLicenseSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"UserLicense", IUserLicenseSource>(UserLicenseSource);
