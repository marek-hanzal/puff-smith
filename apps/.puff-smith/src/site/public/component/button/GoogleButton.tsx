import {GoogleOutlined} from "@ant-design/icons";
import {
    Button,
    ButtonProps
}                       from "antd";
import {signIn}         from "next-auth/react";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface IGoogleButtonProps extends Partial<ButtonProps> {
}

export const GoogleButton: FC<IGoogleButtonProps> = props => {
	const {t} = useTranslation();
	return <Button
		type={"primary"}
		size={"large"}
		icon={<GoogleOutlined/>}
		ghost
		onClick={() => signIn("google", {callbackUrl: "/"})}
		{...props}
	>
		{t("public.sign-in.google.button")}
	</Button>;
};
