import {Button, Col, Divider, Input, Row, Space, Typography} from "antd";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {signIn} from "next-auth/react";
import {Trans, useTranslation} from "react-i18next";
import {Card, Form, FormItem, GithubIcon, NumberRange, Submit, Template} from "@leight-core/client";
import {FullLogoIcon} from "@/puff-smith";
import {MailOutlined} from "@ant-design/icons";

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
						<Divider/>
						<Space size={0} direction={'vertical'} split={<Divider/>}>
							<Button
								type={'primary'}
								size={'large'}
								icon={<GithubIcon/>}
								ghost
								onClick={() => signIn('github', {callbackUrl: '/'})}
							>
								{t('public.sign-in.github.button')}
							</Button>
							<Form
								layout={'inline'}
								onSuccess={async ({values: {email}}) => await signIn('email', {email, callbackUrl: '/'})}
								translation={'public.sign-in'}
							>
								<Space align={'baseline'}>
									<FormItem field={'email'} required showLabel={false}>
										<Input type={'email'} prefix={<MailOutlined/>}/>
									</FormItem>
									<Submit
										type={'primary'}
										size={'large'}
										ghost
										label={'email.button'}
									/>
								</Space>
							</Form>
						</Space>
					</Card>
				</Col>
			</Row>
		</Template>
	</PublicPage>;
});
