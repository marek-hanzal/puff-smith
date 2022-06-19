import {ILicenseSource} from "@/puff-smith/service/license/interface";
import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ILicenseSource>(LicenseSource);
