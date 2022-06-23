import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {UserCertificateSource} from "@/puff-smith/service/user/certificate/UserCertificateSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IUserCertificateSource>({
	source: UserCertificateSource,
});
