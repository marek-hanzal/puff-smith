import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IUserLicenseRequestSource>({
	source: UserLicenseRequestSource,
});
