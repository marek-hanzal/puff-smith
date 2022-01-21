import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ProfilerTable} from "@/puff-smith/site/root/profiler";

export default withRootLayout(function List() {
	return <RootPage
		name={"root.profiler.list"}
		menu={() => <RootMenu/>}
	>
		<ProfilerTable/>
	</RootPage>;
});
