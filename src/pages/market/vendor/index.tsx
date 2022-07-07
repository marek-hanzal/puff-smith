import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {VendorCreateButton} from "@/puff-smith/site/shared/vendor/@module/button/VendorCreateButton";
import {VendorFilter} from "@/puff-smith/site/shared/vendor/@module/filter/VendorFilter";
import {VendorList} from "@/puff-smith/site/shared/vendor/@module/list/VendorList";
import {VendorListToolbar} from "@/puff-smith/site/shared/vendor/@module/list/VendorListToolbar";
import {VendorProviderControl} from "@/sdk/api/vendor/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.vendor.index"}
			menuSelection={["/market/vendor"]}
			icon={<VendorIcon/>}
			extra={<VendorCreateButton/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<VendorIcon/>}
					label={"market.vendor.label"}
				/>
			</Breadcrumbs>}
		>
			<VendorProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<VendorList
						header={() => <RowInline
							extra={<VendorListToolbar/>}
						>
							<VendorFilter/>
						</RowInline>}
					/>
				</SelectionProvider>
			</VendorProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.vendor.index"}
			menuSelection={["/market/vendor"]}
			icon={<VendorIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<VendorProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<VendorList/>
				</SelectionProvider>
			</VendorProviderControl>
		</MobileMarketPage>
	</>;
});
