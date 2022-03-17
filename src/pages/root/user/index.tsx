import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";
import {UserIcon} from "@/puff-smith";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.user"}
		menuSelection={['/root/user']}
		icon={<UserIcon/>}
	>
		<Template>
		</Template>
	</RootPage>;
});
