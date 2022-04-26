import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CellList} from "@/puff-smith/site/market/cell/@module/list/CellList";
import {QuickFilter} from "@/puff-smith/site/shared/cell/@module/filter/QuickFilter";
import {CellsSourceControlProvider} from "@/sdk/api/cell/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cell.index"}
		menuSelection={["/market/cell"]}
		icon={<CellIcon/>}
	>
		<CellsSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<CellList
				header={() => <QuickFilter/>}
			/>
		</CellsSourceControlProvider>
	</MarketPage>;
});
