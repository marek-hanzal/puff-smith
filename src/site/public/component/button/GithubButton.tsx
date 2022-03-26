import {GithubIcon} from "@leight-core/client";
import {signIn} from "next-auth/react";
import {Button, ButtonProps} from "antd";
import {useTranslation} from "react-i18next";
import {FC} from "react";

export interface IGithubButtonProps extends Partial<ButtonProps> {
}

export const GithubButton: FC<IGithubButtonProps> = props => {
	const {t} = useTranslation();
	return <Button
		type={'primary'}
		size={'large'}
		icon={<GithubIcon/>}
		ghost
		onClick={() => signIn('github', {callbackUrl: '/'})}
	>
		{t('public.sign-in.github.button')}
	</Button>;
}
