import {UserOutlined} from "@ant-design/icons";
import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserProfileButtonProps extends Partial<IButtonLinkProps> {
}

export const UserProfileButton: FC<IUserProfileButtonProps> = (props) => {
	const {t} = useTranslation();
	return <Tooltip title={t("marsh.user.profile.tooltip")}>
		<ButtonLink
			type={"link"}
			href={"/lab/user/profile"}
			icon={<UserOutlined/>}
			{...props}
		/>
	</Tooltip>;
};
