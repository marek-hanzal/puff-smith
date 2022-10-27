import {UserOutlined}   from "@ant-design/icons";
import {
	Button,
	ButtonProps
}                       from "antd";
import {signIn}         from "next-auth/react";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface ISignInButtonProps extends Partial<ButtonProps> {
}

export const SignInButton: FC<ISignInButtonProps> = props => {
	const {t} = useTranslation();
	return <Button
		type={"primary"}
		size={"large"}
		icon={<UserOutlined/>}
		ghost
		onClick={() => signIn(undefined, {callbackUrl: "/"})}
		{...props}
	>
		{t("public.sign-in.common.button")}
	</Button>;
};
