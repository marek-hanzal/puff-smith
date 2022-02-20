import {PoweroffOutlined} from "@ant-design/icons";
import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILogoutButtonProps extends Partial<IButtonLinkProps> {
}

export const LogoutButton: FC<ILogoutButtonProps> = (props) => {
	const {t} = useTranslation();
	return <Tooltip title={t("common.sign-out.tooltip")}>
		<ButtonLink
			type={"link"}
			href={"/sign-out"}
			icon={<PoweroffOutlined/>}
			{...props}
		/>
	</Tooltip>;
};
