import {SignOutIcon} from "@leight-core/client";
import {Button, ButtonProps, Tooltip} from "antd";
import {signOut} from "next-auth/react";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ISignOutButtonProps extends Partial<ButtonProps> {
}

export const SignOutButton: FC<ISignOutButtonProps> = props => {
	const {t} = useTranslation();
	return <Tooltip title={t("common.sign-out.tooltip")}>
		<Button
			type={"link"}
			onClick={() => signOut({callbackUrl: "/"})}
			icon={<SignOutIcon/>}
			{...props}
		/>
	</Tooltip>;
};
