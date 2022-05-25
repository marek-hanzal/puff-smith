import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/market/atomizer/@module/filter/AtomizerFilter";
import {AtomizerList} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerList";
import {AtomizerProviderControl} from "@/sdk/api/atomizer/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={["/market/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizerProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<AtomizerList
				header={() => <AtomizerFilter/>}
			/>
		</AtomizerProviderControl>
	</MarketPage>;
});
