import {IUserCertificateRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {useUserCertificateQueryInvalidate} from "@/sdk/api/user/certificate/query";
import {useCertificateRequestApproveMutation} from "@/sdk/api/user/certificate/request/approve";
import {useUserCertificateRequestQueryInvalidate} from "@/sdk/api/user/certificate/request/query";
import {CheckCircleOutlined} from "@ant-design/icons";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateApproveButtonProps extends Partial<ButtonProps> {
	userCertificateRequest: IUserCertificateRequest;
}

export const CertificateApproveButton: FC<ICertificateApproveButtonProps> = ({userCertificateRequest, ...props}) => {
	const {t} = useTranslation();
	const certificateRequestApproveMutation = useCertificateRequestApproveMutation();
	const userCertificateRequestQueryInvalidate = useUserCertificateRequestQueryInvalidate(false);
	const userCertificateQueryInvalidate = useUserCertificateQueryInvalidate();
	return <Button
		type={"link"}
		size={"large"}
		icon={<CheckCircleOutlined/>}
		loading={certificateRequestApproveMutation.isLoading}
		onClick={() => certificateRequestApproveMutation.mutate({id: userCertificateRequest.id}, {
			onSuccess: async () => {
				message.success(t("shared.user.certificate.request.approve.success"));
				await userCertificateRequestQueryInvalidate();
				await userCertificateQueryInvalidate();
			},
			onError: async () => {
				message.error(t("shared.user.certificate.request.approve.failure"));
			}
		})}
		{...props}
	/>;
};
