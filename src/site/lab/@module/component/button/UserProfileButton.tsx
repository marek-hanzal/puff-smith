import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {ButtonLink, IButtonLinkProps} from "@leight-core/client";
import {Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserProfileButtonProps extends Partial<IButtonLinkProps> {
}

export const UserProfileButton: FC<IUserProfileButtonProps> = (props) => {
	const {t} = useTranslation();
	return <Tooltip title={t("lab.user.profile.tooltip")}>
		<ButtonLink
			href={"/lab/user/profile"}
			icon={<UserIcon/>}
			{...props}
		/>
	</Tooltip>;
};
