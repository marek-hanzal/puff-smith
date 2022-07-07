import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CellFilter} from "@/puff-smith/site/market/cell/@module/filter/CellFilter";
import {CellList} from "@/puff-smith/site/market/cell/@module/list/CellList";
import {CellListToolbar} from "@/puff-smith/site/market/cell/@module/list/CellListToolbar";
import {CellCreateInline} from "@/puff-smith/site/shared/cell/@module/form/CellCreateInline";
import {CellProviderControl} from "@/sdk/api/cell/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.cell.index"}
			menuSelection={["/market/cell"]}
			icon={<CellIcon/>}
			extra={<CellCreateInline
				type={"primary"}
				size={"large"}
				icon={<CellIcon/>}
			/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<CellIcon/>}
					label={"market.cell.label"}
				/>
			</Breadcrumbs>}
		>
			<CellProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<CellList
						header={() => <RowInline
							extra={<CellListToolbar/>}
						>
							<CellFilter/>
						</RowInline>}
					/>
				</SelectionProvider>
			</CellProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.cell.index"}
			menuSelection={["/market/cell"]}
			icon={<CellIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<CellProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<CellList/>
				</SelectionProvider>
			</CellProviderControl>
		</MobileMarketPage>
	</>;
});
