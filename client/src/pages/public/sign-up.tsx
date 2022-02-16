import {SignUpIcon, Template} from "@leight-core/leight";
import {PublicPage, SignUpForm, withPublicLayout} from "@/puff-smith/site/public";
import {Divider} from "antd";

export default withPublicLayout(function Login() {
	return <PublicPage
		title={"public.sign-up"}
		menuSelection={['/public/sign-up']}
	>
		<Template
			icon={<SignUpIcon/>}
			label={"public.sign-up"}
			span={8}
			extra={<Divider/>}
		>
			<SignUpForm/>
		</Template>
	</PublicPage>;
});
