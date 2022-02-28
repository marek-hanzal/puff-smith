import icon from "@/puff-smith/assets/logo/logo-full.svg";
import {Button, Col, Divider, Image, Row} from "antd";
import {Card, Template} from "@leight-core/component";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {signIn, useSession} from "next-auth/react";

export default withPublicLayout(function Index() {

	console.log('session', useSession());

	return <PublicPage
		title={"public.index"}
		menuSelection={['/public']}
		fullwidth
	>
		<Template
			icon={<Image alt={"logo"} height={160} preview={false} src={icon}/>}
			extra={<Divider/>}
		>
			<Row gutter={32}>
				<Col span={11}>
					<Card title={'public.sing-in.card.title'}>
						<Button
							type={'primary'}
							size={'large'}
							onClick={() => signIn(undefined, {callbackUrl: '/'})}
						>
							[Sign In]
						</Button>
					</Card>
				</Col>
				<Col span={2}>
				</Col>
				<Col span={11}>
					<Card title={'public.sing-up.card.title'}>
						{/*<SignUpForm/>*/}
					</Card>
				</Col>
			</Row>
		</Template>
	</PublicPage>;
});
