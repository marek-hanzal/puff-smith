import {FullLogoIcon}      from "@/puff-smith/component/icon/FullLogoIcon";
import {BrowserPublicPage} from "@/puff-smith/site/public/component/BrowserPublicPage";
import {EmailButton}       from "@/puff-smith/site/public/component/button/EmailButton";
import {GithubButton}      from "@/puff-smith/site/public/component/button/GithubButton";
import {GoogleButton}      from "@/puff-smith/site/public/component/button/GoogleButton";
import {SignInButton}      from "@/puff-smith/site/public/component/button/SignInButton";
import {MobilePublicPage}  from "@/puff-smith/site/public/component/MobilePublicPage";
import {withPublicLayout}  from "@/puff-smith/site/public/layout/layout";
import {
    ButtonBar,
    Card,
    Centered,
    numbersOf,
    Template
}                          from "@leight-core/viv";
import {
    Col,
    Divider,
    Row,
    Space,
    Typography
}                          from "antd";
import {
    Trans,
    useTranslation
}                          from "react-i18next";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <>
		<BrowserPublicPage
			title={"public.index"}
			menuSelection={["/public"]}
		>
			<Template
				icon={<FullLogoIcon height={200} style={{width: "300px"}}/>}
			>
				<Row gutter={32}>
					<Col span={11}>
						{numbersOf(2).map(index => <Card key={"intro-item-" + index} title={t(`public.intro.item.${index}.title`)}>
							<Typography.Paragraph>
								<Trans i18nKey={`public.intro.item.${index}.content`}/>
							</Typography.Paragraph>
						</Card>)}
					</Col>
					<Col span={11}>
						<Card title={t("public.intro.login.title")}>
							<Typography.Paragraph>
								<Trans i18nKey={"public.intro.login.content"}/>
							</Typography.Paragraph>
							<Divider/>
							<Space size={0} direction={"vertical"} split={<Divider/>}>
								<EmailButton/>
								<ButtonBar split={<Divider type={"vertical"}/>} size={4}>
									<GithubButton/>
									<GoogleButton/>
									<SignInButton/>
								</ButtonBar>
							</Space>
						</Card>
					</Col>
				</Row>
			</Template>
		</BrowserPublicPage>
		<MobilePublicPage>
			<Template
				forceIcon
				icon={<FullLogoIcon height={200} style={{width: "300px"}}/>}
			>
				<Centered>
					<ButtonBar direction={"vertical"} split={<Divider type={"vertical"}/>} size={4}>
						<GithubButton/>
						<GoogleButton/>
						<SignInButton/>
					</ButtonBar>
				</Centered>
			</Template>
		</MobilePublicPage>
	</>;
});
