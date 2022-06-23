import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Certificate", ICertificateSource>({
	source: CertificateSource,
});
