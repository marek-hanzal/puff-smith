import {ILicenseSource} from "@/puff-smith/service/license/interface";
import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"LicenseCount", ILicenseSource>({
	source: LicenseSource,
});
