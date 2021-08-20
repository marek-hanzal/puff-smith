import icon from "@/vapers-dream/assets/logo.svg";
import {PublicPage, SignInForm, withPublicLayout} from "@/vapers-dream/site/public";
import {SignUpForm} from "@/vapers-dream/site/public/form/SignUpform";
import {Card, Col, Image, Result, Row} from "antd";
import {useTranslation} from "react-i18next";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <PublicPage
		name={"public.index"}
		fullwidth
	>
		<Result
			icon={<Image alt={"logo"} height={110} preview={false} src={icon}/>}
			status={"success"}
			title={t("public.home.content.title")}
			subTitle={t("public.home.content.subtitle")}
		>
			<Row gutter={32}>
				<Col span={12}>
					<Card title={t("public.sign-in.title")}>
						<SignInForm/>
					</Card>
				</Col>
				<Col span={12}>
					<Card title={t("public.sign-up.title")}>
						<SignUpForm/>
					</Card>
				</Col>
			</Row>
		</Result>
	</PublicPage>;
});
