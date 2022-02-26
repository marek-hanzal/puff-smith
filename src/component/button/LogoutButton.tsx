import {PoweroffOutlined} from "@ant-design/icons";
import {Button, ButtonProps, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {signOut} from "next-auth/react";

export interface ILogoutButtonProps extends Partial<ButtonProps> {
}

export const LogoutButton: FC<ILogoutButtonProps> = props => {
	const {t} = useTranslation();
	return <Tooltip title={t("common.sign-out.tooltip")}>
		<Button
			type={"link"}
			onClick={() => signOut({callbackUrl: '/'})}
			icon={<PoweroffOutlined/>}
			{...props}
		/>
	</Tooltip>;
};
