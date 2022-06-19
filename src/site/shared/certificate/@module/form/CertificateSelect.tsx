import {CertificateProviderControl, CertificateSourceSelect, ICertificateSourceSelectProps} from "@/sdk/api/certificate/query";
import {FC} from "react";

export interface ICertificateSelectProps extends Partial<ICertificateSourceSelectProps> {
}

export const CertificateSelect: FC<ICertificateSelectProps> = props => {
	return <CertificateProviderControl>
		<CertificateSourceSelect
			showSearch
			allowClear
			toOption={certificate => ({
				value: certificate.id,
				label: certificate.name,
			})}
			{...props}
		/>
	</CertificateProviderControl>;
};
