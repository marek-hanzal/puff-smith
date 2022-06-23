import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IUserLicenseRequestSource>({
	source: UserLicenseRequestSource,
});
