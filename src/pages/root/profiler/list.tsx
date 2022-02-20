import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ProfilerTable} from "@/puff-smith/site/root/profiler";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.profiler.list"}
	>
		<RootMenu/>
		<ProfilerTable/>
	</RootPage>;
});
