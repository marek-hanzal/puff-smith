import {CottonIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {CottonList} from "@/puff-smith/site/market/cotton";
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
			defaultPage={0}
			defaultSize={10}
		>
			<CottonList/>
		</CottonsSourceControlProvider>
	</MarketPage>;
});
