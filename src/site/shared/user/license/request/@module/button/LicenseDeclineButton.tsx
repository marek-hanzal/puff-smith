import {IUserLicenseRequest} from "@/puff-smith/service/user/license/request/interface";
import {useLicenseRequestDeclineMutation} from "@/sdk/api/user/license/request/decline";
import {useUserLicenseRequestQueryInvalidate} from "@/sdk/api/user/license/request/query";
import {CloseCircleTwoTone} from "@ant-design/icons";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILicenseDeclineButtonProps extends Partial<ButtonProps> {
	userLicenseRequest: IUserLicenseRequest;
}

export const LicenseDeclineButton: FC<ILicenseDeclineButtonProps> = ({userLicenseRequest, ...props}) => {
	const {t} = useTranslation();
	const licenseRequestDeclineMutation = useLicenseRequestDeclineMutation();
	const userLicenseRequestQueryInvalidate = useUserLicenseRequestQueryInvalidate(false);
	return <Button
		type={"link"}
		size={"large"}
		icon={<CloseCircleTwoTone twoToneColor={"red"}/>}
		loading={licenseRequestDeclineMutation.isLoading}
		onClick={() => licenseRequestDeclineMutation.mutate({id: userLicenseRequest.id}, {
			onSuccess: async () => {
				message.success(t("shared.user.license.request.decline.success"));
				await userLicenseRequestQueryInvalidate();
			},
			onError: async () => {
				message.error(t("shared.user.license.request.decline.failure"));
			}
		})}
		{...props}
	/>;
};
