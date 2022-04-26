import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {ModList} from "@/puff-smith/site/market/mod/@module/list/ModList";
import {ModsSourceControlProvider} from "@/sdk/api/mod/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mod.index"}
		menuSelection={["/market/mod"]}
		icon={<ModIcon/>}
	>
		<ModsSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<ModList/>
		</ModsSourceControlProvider>
	</MarketPage>;
});
