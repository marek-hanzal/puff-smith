import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {CommonPageMenu} from "@/puff-smith/../../../_site/root/common";
import {LogFilter, LogsTable} from "@/puff-smith/../../../_site/root/log";
import {LogsFilterContext} from "@/sdk/edde/api/root/log/endpoint";

// noinspection JSUnusedGlobalSymbols
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
