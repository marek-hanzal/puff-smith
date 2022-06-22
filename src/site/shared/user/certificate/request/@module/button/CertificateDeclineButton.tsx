import {IUserCertificateRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {useCertificateRequestDeclineMutation} from "@/sdk/api/user/certificate/request/decline";
import {useUserCertificateRequestQueryInvalidate} from "@/sdk/api/user/certificate/request/query";
import {CloseCircleTwoTone} from "@ant-design/icons";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateDeclineButtonProps extends Partial<ButtonProps> {
	userCertificateRequest: IUserCertificateRequest;
}

export const CertificateDeclineButton: FC<ICertificateDeclineButtonProps> = ({userCertificateRequest, ...props}) => {
	const {t} = useTranslation();
	const certificateRequestDeclineMutation = useCertificateRequestDeclineMutation();
	const userCertificateRequestQueryInvalidate = useUserCertificateRequestQueryInvalidate(false);
	return <Button
		type={"link"}
		size={"large"}
		icon={<CloseCircleTwoTone twoToneColor={"red"}/>}
		loading={certificateRequestDeclineMutation.isLoading}
		onClick={() => certificateRequestDeclineMutation.mutate({id: userCertificateRequest.id}, {
			onSuccess: async () => {
				message.success(t("shared.user.certificate.request.decline.success"));
				await userCertificateRequestQueryInvalidate();
			},
			onError: async () => {
				message.error(t("shared.user.certificate.request.decline.failure"));
			}
		})}
		{...props}
	/>;
};
