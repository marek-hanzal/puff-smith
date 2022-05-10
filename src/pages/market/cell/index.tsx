import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CellFilter} from "@/puff-smith/site/market/cell/@module/filter/CellFilter";
import {CellList} from "@/puff-smith/site/market/cell/@module/list/CellList";
import {CellSourceControlProvider} from "@/sdk/api/cell/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cell.index"}
		menuSelection={["/market/cell"]}
		icon={<CellIcon/>}
	>
		<CellSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<CellList
				header={() => <CellFilter/>}
			/>
		</CellSourceControlProvider>
	</MarketPage>;
});
