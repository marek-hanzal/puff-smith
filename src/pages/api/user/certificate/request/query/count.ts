import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"UserCertificateRequestCount", IUserCertificateRequestSource>(UserCertificateRequestSource);
