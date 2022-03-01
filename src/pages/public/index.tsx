import icon from "@/puff-smith/assets/logo/logo-full.svg";
import {Button, Divider, Image} from "antd";
import {Card, Template} from "@leight-core/component";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {signIn} from "next-auth/react";

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
			<Card title={'public.sing-in.card.title'}>
				<Button
					type={'primary'}
					size={'large'}
					onClick={() => signIn(undefined, {callbackUrl: '/'})}
				>
					[Sign In]
				</Button>
			</Card>
		</Template>
	</PublicPage>;
});
