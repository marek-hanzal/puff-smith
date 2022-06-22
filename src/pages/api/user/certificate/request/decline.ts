import {IUserCertificateRequestRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"CertificateRequestDecline", IUserCertificateRequestRequest, any>(async ({user, request}) => UserCertificateRequestSource().withUser(user).decline(request));
