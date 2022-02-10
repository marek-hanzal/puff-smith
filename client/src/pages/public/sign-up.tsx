import {Template} from "@leight-core/leight";
import {PublicPage, SignUpForm, withPublicLayout} from "@/puff-smith/site/public";
import {Divider} from "antd";
import {SignUpIcon} from "@leight-core/leight/dist";

export default withPublicLayout(function Login() {
	return <PublicPage
		title={"public.sign-up"}
		menuSelection={['/public/sign-up']}
	>
		<Template
			icon={<SignUpIcon/>}
			label={"public.sign-up"}
			span={10}
			extra={<Divider/>}
		>
			<SignUpForm/>
		</Template>
	</PublicPage>;
});
