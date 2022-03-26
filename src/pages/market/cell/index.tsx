import {CellIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {CellList} from "@/puff-smith/site/market/cell";
import {CellsSourceControlProvider} from "@/sdk/api/cell/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cell.index"}
		menuSelection={['/market/cell']}
		icon={<CellIcon/>}
	>
		<CellsSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<CellList/>
		</CellsSourceControlProvider>
	</MarketPage>;
});
