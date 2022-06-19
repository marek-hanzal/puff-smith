import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CertificateCount", ICertificateSource>(CertificateSource);
