import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {BaseFilter} from "@/puff-smith/site/inventory/base/@module/filter/BaseFilter";
import {BaseInventoryList} from "@/puff-smith/site/inventory/base/@module/list/BaseInventoryList";
import {BaseListToolbar} from "@/puff-smith/site/inventory/base/@module/list/BaseListToolbar";
import {BaseInventoryProviderControl} from "@/sdk/api/inventory/base/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <BrowserInventoryPage
		title={"inventory.base.index"}
		menuSelection={["/inventory/base"]}
		icon={<BaseIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.base.favorite.tab"}/>}>
				<BaseInventoryProviderControl
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
						<BaseInventoryList
							header={() => <RowInline
								extra={<BaseListToolbar/>}
							>
								<BaseFilter
									toFilter={filter => ({base: filter})}
								/>
							</RowInline>}
							emptyText={<Template
								icon={<BaseIcon/>}
								label={"lab.base.list.favorite.empty"}
							/>}
						/>
					</SelectionProvider>
				</BaseInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<BaseIcon/>} title={"inventory.base.all.tab"}/>}>
				<BaseInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<BaseInventoryList
							header={() => <RowInline
								extra={<BaseListToolbar/>}
							>
								<BaseFilter
									toFilter={filter => ({base: filter})}
								/>
							</RowInline>}
						/>
					</SelectionProvider>
				</BaseInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</BrowserInventoryPage>;
});
