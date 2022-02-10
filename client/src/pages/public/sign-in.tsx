import {SignInIcon, Template} from "@leight-core/leight";
import {PublicPage, SignInForm, withPublicLayout} from "@/puff-smith/site/public";
import {Divider} from "antd";

export default withPublicLayout(function Login() {
	return <PublicPage
		title={"public.sign-in"}
		menuSelection={['/public/sign-in']}
	>
		<Template
			icon={<SignInIcon/>}
			label={"public.sign-in.content"}
			span={10}
			extra={<Divider/>}
		>
			<SignInForm/>
		</Template>
	</PublicPage>;
});
