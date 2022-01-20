import {SignInIcon, Template} from "@leight-core/leight";
import {PublicMenu, PublicPage, SignUpForm, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Login() {
	return <PublicPage
		name={"public.sign-up"}
	>
		<PublicMenu/>
		<Template
			icon={<SignInIcon/>}
			label={"public.sign-up"}
			span={10}
		>
			<SignUpForm/>
		</Template>
	</PublicPage>;
});
