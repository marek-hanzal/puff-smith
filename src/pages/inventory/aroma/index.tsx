import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaFilter} from "@/puff-smith/site/inventory/aroma/@module/filter/AromaFilter";
import {AromaInventoryList} from "@/puff-smith/site/inventory/aroma/@module/list/AromaInventoryList";
import {AromaListToolbar} from "@/puff-smith/site/inventory/aroma/@module/list/AromaListToolbar";
import {AromaInventoryProviderControl} from "@/sdk/api/inventory/aroma/query";
import {FireOutlined} from "@ant-design/icons";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.aroma.index"}
		menuSelection={["/inventory/aroma"]}
		icon={<LiquidIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FireOutlined/>} title={"inventory.aroma.favorite.tab"}/>}>
				<AromaInventoryProviderControl
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
						<AromaInventoryList
							header={() => <RowInline
								extra={<AromaListToolbar/>}
							>
								<AromaFilter
									toFilter={filter => ({aroma: filter})}
								/>
							</RowInline>}
							locale={{
								emptyText: <Template
									icon={<LiquidIcon/>}
									label={"lab.aroma.list.favorite.empty"}
								/>,
							}}
						/>
					</SelectionProvider>
				</AromaInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<LiquidIcon/>} title={"inventory.aroma.all.tab"}/>}>
				<AromaInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<AromaInventoryList
							header={() => <RowInline
								extra={<AromaListToolbar/>}
							>
								<AromaFilter
									toFilter={filter => ({aroma: filter})}
								/>
							</RowInline>}
						/>
					</SelectionProvider>
				</AromaInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</InventoryPage>;
});
