import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {WireInventoryList} from "@/puff-smith/site/inventory/wire/@module/list/WireInventoryList";
import {WireListToolbar} from "@/puff-smith/site/inventory/wire/@module/list/WireListToolbar";
import {WireInventoryProviderControl} from "@/sdk/api/inventory/wire/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.wire.index"}
		menuSelection={["/inventory/wire"]}
		icon={<WireIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.wire.favorite.tab"}/>}>
				<WireInventoryProviderControl
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
						<WireInventoryList
							header={() => <RowInline
								extra={<WireListToolbar/>}
							>
							</RowInline>}
							locale={{
								emptyText: <Template
									icon={<WireIcon/>}
									label={"lab.wire.list.favorite.empty"}
								/>,
							}}
						/>
					</SelectionProvider>
				</WireInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<WireIcon/>} title={"inventory.wire.all.tab"}/>}>
				<WireInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<WireInventoryList
							header={() => <RowInline
								extra={<WireListToolbar/>}
							>
							</RowInline>}
						/>
					</SelectionProvider>
				</WireInventoryProviderControl>

			</Tabs.TabPane>
		</Tabs>
	</InventoryPage>;
});
