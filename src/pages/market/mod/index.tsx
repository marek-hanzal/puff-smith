import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {ModFilter} from "@/puff-smith/site/market/mod/@module/filter/ModFilter";
import {ModList} from "@/puff-smith/site/market/mod/@module/list/ModList";
import {ModProviderControl} from "@/sdk/api/mod/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mod.index"}
		menuSelection={["/market/mod"]}
		icon={<ModIcon/>}
	>
		<ModProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<ModList
				header={() => <ModFilter/>}
			/>
		</ModProviderControl>
	</MarketPage>;
});
