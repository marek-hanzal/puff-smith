import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {UserCertificateSource} from "@/puff-smith/service/user/certificate/UserCertificateSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"UserCertificateCount", IUserCertificateSource>({
	source: UserCertificateSource,
});
