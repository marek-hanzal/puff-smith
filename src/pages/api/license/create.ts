import {ILicenseSource} from "@/puff-smith/service/license/interface";
import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ILicenseSource>(LicenseSource);
