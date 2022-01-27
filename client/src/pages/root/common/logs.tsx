import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {CommonPageMenu} from "@/puff-smith/site/root/common";
import {LogsControl} from "@/puff-smith/site/root/log";

export default withRootLayout(function Logs() {
	return <RootPage
		title={"root.logs"}
	>
		<RootMenu/>
		<CommonPageMenu/>
		<LogsControl/>
	</RootPage>;
});
