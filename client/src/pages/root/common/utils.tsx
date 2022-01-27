import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {DropCacheButton} from "@/puff-smith/site/root/cache";
import {CommonPageMenu} from "@/puff-smith/site/root/common";
import {Divider, Space} from "antd";

export default withRootLayout(function Utils() {
	return <RootPage
		title={"root.common.utils"}
	>
		<RootMenu/>
		<CommonPageMenu/>
		<Space split={<Divider type={"vertical"}/>}>
			<DropCacheButton/>
		</Space>
	</RootPage>;
});
