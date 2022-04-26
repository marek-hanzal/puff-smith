import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CottonList} from "@/puff-smith/site/market/cotton/@module/list/CottonList";
import {CottonsSourceControlProvider} from "@/sdk/api/cotton/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cotton.index"}
		menuSelection={["/market/cotton"]}
		icon={<CottonIcon/>}
	>
		<CottonsSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<CottonList/>
		</CottonsSourceControlProvider>
	</MarketPage>;
});
