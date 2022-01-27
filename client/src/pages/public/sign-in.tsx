import {SignInIcon, Template} from "@leight-core/leight";
import {isMobile} from 'react-device-detect';
import {PublicMenu, PublicPage, SignInForm, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Login() {
	return <PublicPage
		name={"public.sign-in"}
	>
		<PublicMenu/>
		<Template
			icon={<SignInIcon/>}
			label={"public.sign-in.content"}
			span={isMobile ? 24 : 10}
		>
			<SignInForm/>
		</Template>
	</PublicPage>;
});
