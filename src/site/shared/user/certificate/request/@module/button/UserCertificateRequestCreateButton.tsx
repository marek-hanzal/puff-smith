import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {ICertificate} from "@/puff-smith/service/certificate/interface";
import {useCertificateQueryInvalidate} from "@/sdk/api/certificate/query";
import {useCreateMutation} from "@/sdk/api/user/certificate/request/create";
import {useUserCertificateRequestQueryInvalidate} from "@/sdk/api/user/certificate/request/query";
import {IModalButtonProps, ModalButton} from "@leight-core/client";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserCertificateRequestCreateButtonProps extends Partial<IModalButtonProps> {
	certificate: ICertificate;
}

export const UserCertificateRequestCreateButton: FC<IUserCertificateRequestCreateButtonProps> = ({certificate, ...props}) => {
	const {t} = useTranslation();
	const createMutation = useCreateMutation();
	const certificateQueryInvalidate = useCertificateQueryInvalidate();
	const userCertificateRequestQueryInvalidate = useUserCertificateRequestQueryInvalidate();
	return <ModalButton
		button={{
			type: "link",
			size: "large",
			icon: <CertificateIcon/>,
		}}
		okText={t("shared.user.certificate.request.button")}
		okButtonProps={{
			icon: <CertificateIcon/>,
		}}
		title={"shared.user.certificate.request.title"}
		{...props}
	>
		shared.user.certificate.request.content
	</ModalButton>;
};
