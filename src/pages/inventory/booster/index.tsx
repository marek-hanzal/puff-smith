import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {BoosterFilter} from "@/puff-smith/site/inventory/booster/@module/filter/BoosterFilter";
import {BoosterInventoryList} from "@/puff-smith/site/inventory/booster/@module/list/BoosterInventoryList";
import {BoosterListToolbar} from "@/puff-smith/site/inventory/booster/@module/list/BoosterListToolbar";
import {BoosterInventoryProviderControl} from "@/sdk/api/inventory/booster/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <BrowserInventoryPage
		title={"inventory.booster.index"}
		menuSelection={["/inventory/booster"]}
		icon={<BoosterIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.booster.favorite.tab"}/>}>
				<BoosterInventoryProviderControl
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
						<BoosterInventoryList
							header={() => <RowInline
								extra={<BoosterListToolbar/>}
							>
								<BoosterFilter
									toFilter={filter => ({booster: filter})}
								/>
							</RowInline>}
							emptyText={<Template
								icon={<BoosterIcon/>}
								label={"lab.booster.list.favorite.empty"}
							/>}
						/>
					</SelectionProvider>
				</BoosterInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<BoosterIcon/>} title={"inventory.booster.all.tab"}/>}>
				<BoosterInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<BoosterInventoryList
							header={() => <RowInline
								extra={<BoosterListToolbar/>}
							>
								<BoosterFilter
									toFilter={filter => ({booster: filter})}
								/>
							</RowInline>}
						/>
					</SelectionProvider>
				</BoosterInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</BrowserInventoryPage>;
});
