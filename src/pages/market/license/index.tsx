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
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

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
	</MarketPage>;
});
