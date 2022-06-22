import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {ILicense} from "@/puff-smith/service/license/interface";
import {useLicenseQueryInvalidate} from "@/sdk/api/license/query";
import {useCreateMutation} from "@/sdk/api/user/license/request/create";
import {useUserLicenseRequestQueryInvalidate} from "@/sdk/api/user/license/request/query";
import {IModalButtonProps, ModalButton} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserLicenseRequestCreateButtonProps extends Partial<IModalButtonProps> {
	license: ILicense;
}

export const UserLicenseRequestCreateButton: FC<IUserLicenseRequestCreateButtonProps> = ({license, ...props}) => {
	const {t} = useTranslation();
	const createMutation = useCreateMutation();
	const licenseQueryInvalidate = useLicenseQueryInvalidate();
	const userLicenseRequestQueryInvalidate = useUserLicenseRequestQueryInvalidate();
	return <ModalButton
		button={{
			type: "link",
			size: "large",
			icon: <LicenseIcon/>,
		}}
		okText={t("shared.user.license.request.button")}
		okButtonProps={{
			icon: <LicenseIcon/>,
		}}
		onOk={setShow => {
			createMutation.mutate({
				licenseId: license.id,
			}, {
				onSuccess: async () => {
					message.success(t("shared.user.license.request.success"));
					await licenseQueryInvalidate();
					await userLicenseRequestQueryInvalidate();
				},
				onSettled: () => {
					setShow(false);
				}
			});
		}}
		title={"shared.user.license.request.title"}
		{...props}
	>
		shared.user.license.request.content
	</ModalButton>;
};
