import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IUserCertificateRequestSource>(UserCertificateRequestSource);
