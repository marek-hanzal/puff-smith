import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {UserLicenseSource} from "@/puff-smith/service/user/license/UserLicenseSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IUserLicenseSource>(UserLicenseSource);
