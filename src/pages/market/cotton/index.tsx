import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CottonFilter} from "@/puff-smith/site/market/cotton/@module/filter/CottonFilter";
import {CottonList} from "@/puff-smith/site/market/cotton/@module/list/CottonList";
import {CottonSourceControlProvider} from "@/sdk/api/cotton/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cotton.index"}
		menuSelection={["/market/cotton"]}
		icon={<CottonIcon/>}
	>
		<CottonSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<CottonList
				header={() => <CottonFilter/>}
			/>
		</CottonSourceControlProvider>
	</MarketPage>;
});
