import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {LicenseCreateButton} from "@/puff-smith/site/shared/license/@module/button/LicenseCreateButton";
import {LicenseList} from "@/puff-smith/site/shared/license/@module/list/LicenseList";
import {LicenseListToolbar} from "@/puff-smith/site/shared/license/@module/list/LicenseListToolbar";
import {LicenseProviderControl} from "@/sdk/api/license/query";
import {FireOutlined, LockOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider, TabInline} from "@leight-core/client";
import {Tabs} from "antd";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.license.index"}
		menuSelection={["/market/license"]}
		icon={<LicenseIcon/>}
		extra={<LicenseCreateButton/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<MarketIcon/>}
			/>
			<BreadcrumbIcon
				icon={<LicenseIcon/>}
				label={"market.license.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "market.license.index",
		}}
	>
		<Tabs size={"large"}>
			<Tabs.TabPane key={"available"} tab={<TabInline icon={<FireOutlined/>} title={"market.license.available.tab"}/>}>
				<LicenseProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						cost: {
							gt: 0,
						},
					}}
					defaultOrderBy={{
						name: "asc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<LicenseList/>
					</SelectionProvider>
				</LicenseProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"private"} tab={<TabInline icon={<LockOutlined/>} title={"market.license.private.tab"}/>}>
				<LicenseProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						cost: null,
					}}
					defaultOrderBy={{
						name: "asc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<LicenseList/>
					</SelectionProvider>
				</LicenseProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"licenses"} tab={<TabInline icon={<LicenseIcon/>} title={"market.license.licenses.tab"}/>}>
				<LicenseProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						name: "asc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<LicenseList
							header={() => <RowInline
								extra={<LicenseListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</LicenseProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</MarketPage>;
});
