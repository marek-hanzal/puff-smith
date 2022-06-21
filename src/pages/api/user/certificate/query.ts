import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {UserCertificateSource} from "@/puff-smith/service/user/certificate/UserCertificateSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"UserCertificate", IUserCertificateSource>(UserCertificateSource);
