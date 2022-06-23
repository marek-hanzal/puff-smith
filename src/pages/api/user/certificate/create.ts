import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {UserCertificateSource} from "@/puff-smith/service/user/certificate/UserCertificateSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IUserCertificateSource>({
	source: UserCertificateSource,
});
