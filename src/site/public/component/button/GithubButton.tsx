import {GithubIcon}     from "@leight-core/client";
import {
	Button,
	ButtonProps
}                       from "antd";
import {signIn}         from "next-auth/react";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface IGithubButtonProps extends Partial<ButtonProps> {
}

export const GithubButton: FC<IGithubButtonProps> = props => {
	const {t} = useTranslation();
	return <Button
		type={"primary"}
		size={"large"}
		icon={<GithubIcon/>}
		ghost
		onClick={() => signIn("github", {callbackUrl: "/"})}
		{...props}
	>
		{t("public.sign-in.github.button")}
	</Button>;
};
