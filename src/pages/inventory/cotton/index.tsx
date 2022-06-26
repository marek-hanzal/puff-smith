import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CottonInventoryList} from "@/puff-smith/site/inventory/cotton/@module/list/CottonInventoryList";
import {CottonListToolbar} from "@/puff-smith/site/inventory/cotton/@module/list/CottonListToolbar";
import {CottonInventoryProviderControl} from "@/sdk/api/inventory/cotton/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cotton.index"}
		menuSelection={["/inventory/cotton"]}
		icon={<CottonIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.cotton.favorite.tab"}/>}>
				<CottonInventoryProviderControl
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
						<CottonInventoryList
							header={() => <RowInline
								extra={<CottonListToolbar/>}
							>
							</RowInline>}
							locale={{
								emptyText: <Template
									icon={<CottonIcon/>}
									label={"lab.cotton.list.favorite.empty"}
								/>,
							}}
						/>
					</SelectionProvider>
				</CottonInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<CottonIcon/>} title={"inventory.cotton.all.tab"}/>}>
				<CottonInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<CottonInventoryList
							header={() => <RowInline
								extra={<CottonListToolbar/>}
							>
							</RowInline>}
						/>
					</SelectionProvider>
				</CottonInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</InventoryPage>;
});
