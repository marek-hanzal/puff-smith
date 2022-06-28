import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {ModInventoryList} from "@/puff-smith/site/inventory/mod/@module/list/ModInventoryList";
import {ModListToolbar} from "@/puff-smith/site/inventory/mod/@module/list/ModListToolbar";
import {ModInventoryProviderControl} from "@/sdk/api/inventory/mod/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.mod.index"}
		menuSelection={["/inventory/mod"]}
		icon={<ModIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.mod.favorite.tab"}/>}>
				<ModInventoryProviderControl
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
						<ModInventoryList
							header={() => <RowInline
								extra={<ModListToolbar/>}
							>
							</RowInline>}
							emptyText={<Template
								icon={<ModIcon/>}
								label={"lab.mod.list.favorite.empty"}
							/>}
						/>
					</SelectionProvider>
				</ModInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<ModIcon/>} title={"inventory.mod.all.tab"}/>}>
				<ModInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<ModInventoryList
							header={() => <RowInline
								extra={<ModListToolbar/>}
							>
							</RowInline>}
						/>
					</SelectionProvider>
				</ModInventoryProviderControl>

			</Tabs.TabPane>
		</Tabs>
	</InventoryPage>;
});
