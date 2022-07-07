import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/inventory/cell/@module/list/CellInventoryList";
import {CellListToolbar} from "@/puff-smith/site/inventory/cell/@module/list/CellListToolbar";
import {CellInventoryProviderControl} from "@/sdk/api/inventory/cell/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <BrowserInventoryPage
		title={"inventory.cell.index"}
		menuSelection={["/inventory/cell"]}
		icon={<CellIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<InventoryIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={"inventory.cell.label"}
			/>
		</Breadcrumbs>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.cell.favorite.tab"}/>}>
				<CellInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						rating: {
							gt: 0,
						},
					}}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<CellInventoryList
							header={() => <RowInline
								extra={<CellListToolbar/>}
							></RowInline>}
							emptyText={<Template
								icon={<CellIcon/>}
								label={"lab.cell.list.favorite.empty"}
							/>}
						/>
					</SelectionProvider>
				</CellInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<CellIcon/>} title={"inventory.cell.all.tab"}/>}>
				<CellInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<CellInventoryList
							header={() => <RowInline
								extra={<CellListToolbar/>}
							></RowInline>}
						/>
					</SelectionProvider>
				</CellInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</BrowserInventoryPage>;
});
