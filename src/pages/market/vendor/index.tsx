import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {VendorCreateButton} from "@/puff-smith/site/shared/vendor/@module/button/VendorCreateButton";
import {VendorFilter} from "@/puff-smith/site/shared/vendor/@module/filter/VendorFilter";
import {VendorList} from "@/puff-smith/site/shared/vendor/@module/list/VendorList";
import {VendorListToolbar} from "@/puff-smith/site/shared/vendor/@module/list/VendorListToolbar";
import {VendorProviderControl} from "@/sdk/api/vendor/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.vendor.index"}
		menuSelection={["/market/vendor"]}
		icon={<VendorIcon/>}
		extra={<VendorCreateButton/>}
	>
		<VendorProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
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
	</MarketPage>;
});
