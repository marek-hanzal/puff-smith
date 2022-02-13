import {CommonIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {CommonPageMenu} from "@/puff-smith/site/root/common";
import {Template} from "@leight-core/leight";
import {ButtonBar} from "@leight-core/leight/dist";
import {DropCacheButton} from "@/puff-smith/site/root/cache";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.common.index"}
	>
		<RootMenu/>
		<CommonPageMenu/>
		<Template
			icon={<CommonIcon/>}
			label={"root.common.index"}
			extra={<ButtonBar>
				<DropCacheButton/>
			</ButtonBar>}
		/>
	</RootPage>;
});
