import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {UserLicenseSource} from "@/puff-smith/service/user/license/UserLicenseSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IUserLicenseSource>({
	source: UserLicenseSource,
});
