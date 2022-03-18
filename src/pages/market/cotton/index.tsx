import {CottonIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cotton.index"}
		menuSelection={['/market/cotton']}
		icon={<CottonIcon/>}
	>
	</MarketPage>;
});
