import {CommonIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {CommonPageMenu} from "@/puff-smith/site/root/common";
import {Template} from "@leight-core/leight";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.common.index"}
	>
		<RootMenu/>
		<CommonPageMenu/>
		<Template
			icon={<CommonIcon/>}
			label={"root.common.index"}
		/>
	</RootPage>;
});
