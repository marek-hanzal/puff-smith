import {CellIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cell.index"}
		menuSelection={['/market/cell']}
		icon={<CellIcon/>}
	>
	</MarketPage>;
});
