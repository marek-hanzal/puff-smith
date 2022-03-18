import {Button} from "antd";
import {Card, Template} from "@leight-core/client";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {signIn} from "next-auth/react";

export default withPublicLayout(function Index() {
	return <PublicPage
		title={"public.index"}
		menuSelection={['/public']}
	>
		<Template>
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
