import icon from "@/puff-smith/assets/logo/logo-full.svg";
import {Col, Divider, Image, Row} from "antd";
import {PublicPage, SignInForm, SignUpForm, withPublicLayout} from "@/puff-smith/site/public";
import {Card, Template} from "@leight-core/leight";

export default withPublicLayout(function Index() {
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
				<Col span={12}>
					<Card title={'public.sing-in.card.title'}>
						<SignInForm/>
					</Card>
				</Col>
				<Col span={12}>
					<Card title={'public.sing-up.card.title'}>
						<SignUpForm/>
					</Card>
				</Col>
			</Row>
		</Template>
	</PublicPage>;
});
