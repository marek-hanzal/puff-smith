import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICertificateSource>({
	source: CertificateSource,
});
