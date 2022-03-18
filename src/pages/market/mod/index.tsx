import {ModIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mod.index"}
		menuSelection={['/market/mod']}
		icon={<ModIcon/>}
	>
	</MarketPage>;
});
