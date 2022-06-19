import {ILicenseSource} from "@/puff-smith/service/license/interface";
import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"License", ILicenseSource>(LicenseSource);
