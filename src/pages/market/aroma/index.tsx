import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/site/market/aroma/@module/list/AromaList";
import {AromaFilter} from "@/puff-smith/site/shared/aroma/@module/filter/AromaFilter";
import {AromaProviderControl} from "@/sdk/api/aroma/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.aroma.index"}
		menuSelection={["/market/aroma"]}
		icon={<LiquidIcon/>}
		withHelp={{
			translation: "market.aroma.index",
		}}
	>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<AromaList
				header={() => <AromaFilter/>}
			/>
		</AromaProviderControl>
	</MarketPage>;
});
