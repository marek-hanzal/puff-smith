import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {CommonPageMenu} from "@/puff-smith/site/root/common";
import {LogFilter, LogsTable} from "@/puff-smith/site/root/log";
import {LogsFilterContext} from "@/sdk/edde/api/root/log/endpoint";

export default withRootLayout(function Logs() {
	return <RootPage
		title={"root.logs"}
	>
		<RootMenu/>
		<CommonPageMenu/>
		<LogsFilterContext>
			<LogFilter/>
			<LogsTable/>
		</LogsFilterContext>
	</RootPage>;
});
