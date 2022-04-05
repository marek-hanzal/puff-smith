import {FullLogoIcon} from "@/puff-smith";
import {EmailButton, GithubButton, PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {Card, NumberRange, Template} from "@leight-core/client";
import {Col, Divider, Row, Space, Typography} from "antd";
import {Trans, useTranslation} from "react-i18next";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <PublicPage
		title={"public.index"}
		menuSelection={["/public"]}
	>
		<Template
			icon={<FullLogoIcon height={200} style={{width: "300px"}}/>}
		>
			<Row gutter={32}>
				<Col span={11}>
					{NumberRange(2).map(index => <Card key={"intro-item-" + index} title={t(`public.intro.item.${index}.title`)}>
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
							<GithubButton/>
						</Space>
					</Card>
				</Col>
			</Row>
		</Template>
	</PublicPage>;
});
