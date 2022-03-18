import {Button, Col, Row, Typography} from "antd";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {signIn} from "next-auth/react";
import {Trans, useTranslation} from "react-i18next";
import {GithubOutlined} from "@ant-design/icons";
import {Card, NumberRange, Template} from "@leight-core/client";
import {FullLogoIcon} from "@/puff-smith";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <PublicPage
		title={"public.index"}
		menuSelection={['/public']}
	>
		<Template
			icon={<FullLogoIcon height={200} style={{width: '300px'}}/>}
		>
			<Row gutter={32}>
				<Col span={11}>
					{NumberRange(2).map(index => <Card key={'intro-item-' + index} title={t(`public.intro.item.${index}.title`)}>
						<Typography.Paragraph>
							<Trans i18nKey={`public.intro.item.${index}.content`}/>
						</Typography.Paragraph>
					</Card>)}
				</Col>
				<Col span={11}>
					<Card title={t('public.intro.login.title')}>
						<Typography.Paragraph>
							<Trans i18nKey={'public.intro.login.content'}/>
						</Typography.Paragraph>
						<Button
							type={'primary'}
							size={'large'}
							icon={<GithubOutlined/>}
							ghost
							onClick={() => signIn('github', {callbackUrl: '/'})}
						>
							{t('public.sign-in.github.button')}
						</Button>
					</Card>
				</Col>
			</Row>
		</Template>
	</PublicPage>;
});
