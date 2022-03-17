import {Button} from "antd";
import {Card, Template} from "@leight-core/client";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {getProviders, signIn} from "next-auth/react";

interface IIndexProps {
	providers: Awaited<ReturnType<typeof getProviders>>;
}

export default withPublicLayout(function Index({providers}: IIndexProps) {
	console.log('providers', providers);
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

export const getServerSideProps = async () => {
	return {
		props: {
			providers: await getProviders(),
		},
	}
}
