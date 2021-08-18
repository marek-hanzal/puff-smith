import {PublicMenu, PublicPage, SignInForm, withPublicLayout} from "@/vapers-dream/site/public";
import {Centered, SignInIcon} from "@leight-core/leight";
import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";

export default withPublicLayout(function SignIn() {
	const {t} = useTranslation();
	return <PublicPage
		name={"public.login"}
		menu={() => <PublicMenu/>}
		menuItems={["/public/sign-in"]}
	>
		<Result
			icon={<SignInIcon/>}
			status={"info"}
			title={t("public.sign-in.content.title")}
			subTitle={t("public.sign-in.content.subtitle")}
		>
			<Centered span={16}>
				<Card title={t("public.sign-in.content.form.title")}>
					<SignInForm/>
				</Card>
			</Centered>
		</Result>
	</PublicPage>;
});
