import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IUserCertificateRequestSource>(UserCertificateRequestSource);
