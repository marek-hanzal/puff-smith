import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/inventory/cell/@module/list/CellInventoryList";
import {CellListToolbar} from "@/puff-smith/site/inventory/cell/@module/list/CellListToolbar";
import {CellInventoryProviderControl} from "@/sdk/api/inventory/cell/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cell.index"}
		menuSelection={["/inventory/cell"]}
		icon={<CellIcon/>}
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
							locale={{
								emptyText: <Template
									icon={<CellIcon/>}
									label={"lab.cell.list.favorite.empty"}
								/>,
							}}
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
	</InventoryPage>;
});
