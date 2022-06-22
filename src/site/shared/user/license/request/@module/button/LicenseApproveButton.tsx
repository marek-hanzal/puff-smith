import {IUserLicenseRequest} from "@/puff-smith/service/user/license/request/interface";
import {useUserLicenseQueryInvalidate} from "@/sdk/api/user/license/query";
import {useLicenseRequestApproveMutation} from "@/sdk/api/user/license/request/approve";
import {useUserLicenseRequestQueryInvalidate} from "@/sdk/api/user/license/request/query";
import {CheckCircleOutlined} from "@ant-design/icons";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILicenseApproveButtonProps extends Partial<ButtonProps> {
	userLicenseRequest: IUserLicenseRequest;
}

export const LicenseApproveButton: FC<ILicenseApproveButtonProps> = ({userLicenseRequest, ...props}) => {
	const {t} = useTranslation();
	const licenseRequestApproveMutation = useLicenseRequestApproveMutation();
	const userLicenseRequestQueryInvalidate = useUserLicenseRequestQueryInvalidate(false);
	const userLicenseQueryInvalidate = useUserLicenseQueryInvalidate();
	return <Button
		type={"link"}
		size={"large"}
		icon={<CheckCircleOutlined/>}
		loading={licenseRequestApproveMutation.isLoading}
		onClick={() => licenseRequestApproveMutation.mutate({id: userLicenseRequest.id}, {
			onSuccess: async () => {
				message.success(t("shared.user.license.request.approve.success"));
				await userLicenseRequestQueryInvalidate();
				await userLicenseQueryInvalidate();
			},
			onError: async () => {
				message.error(t("shared.user.license.request.approve.failure"));
			}
		})}
		{...props}
	/>;
};
