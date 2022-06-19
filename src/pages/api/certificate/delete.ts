import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICertificateSource>(CertificateSource);
