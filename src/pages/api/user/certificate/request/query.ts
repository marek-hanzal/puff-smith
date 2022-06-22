import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"UserCertificateRequest", IUserCertificateRequestSource>(UserCertificateRequestSource);
