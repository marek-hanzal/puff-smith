import {Button, ButtonProps, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {signOut} from "next-auth/react";
import {SignOutIcon} from "@leight-core/client";

export interface ILogoutButtonProps extends Partial<ButtonProps> {
}

export const LogoutButton: FC<ILogoutButtonProps> = props => {
	const {t} = useTranslation();
	return <Tooltip title={t("common.sign-out.tooltip")}>
		<Button
			type={"link"}
			onClick={() => signOut({callbackUrl: '/'})}
			icon={<SignOutIcon/>}
			{...props}
		/>
	</Tooltip>;
};
