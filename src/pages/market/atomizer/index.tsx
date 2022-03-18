import {AtomizerIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={['/market/atomizer']}
		icon={<AtomizerIcon/>}
	>
	</MarketPage>;
});
