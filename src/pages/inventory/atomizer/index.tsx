import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/inventory/atomizer/@module/filter/AtomizerFilter";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {AtomizerListToolbar} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerListToolbar";
import {AtomizerInventoryProviderControl} from "@/sdk/api/inventory/atomizer/query";
import {SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.atomizer.index"}
		menuSelection={["/inventory/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"inventory.atomizer.favorite.tab"}/>}>
				<AtomizerInventoryProviderControl
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
						<AtomizerInventoryList
							header={() => <RowInline
								extra={<AtomizerListToolbar/>}
							>
								<AtomizerFilter
									toFilter={values => ({atomizer: values})}
								/>
							</RowInline>}
							emptyText={<Template
								icon={<AtomizerIcon/>}
								label={"lab.atomizer.list.favorite.empty"}
							/>}
						/>
					</SelectionProvider>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"all"} tab={<TabInline icon={<AtomizerIcon/>} title={"inventory.atomizer.all.tab"}/>}>
				<AtomizerInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						rating: "desc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<AtomizerInventoryList
							header={() => <RowInline
								extra={<AtomizerListToolbar/>}
							>
								<AtomizerFilter
									toFilter={values => ({atomizer: values})}
								/>
							</RowInline>}
						/>
					</SelectionProvider>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</InventoryPage>;
});
