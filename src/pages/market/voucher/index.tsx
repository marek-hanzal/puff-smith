import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {VoucherIcon} from "@/puff-smith/component/icon/VoucherIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {VoucherList} from "@/puff-smith/site/market/voucher/@module/list/VoucherList";
import {VoucherProviderControl} from "@/sdk/api/voucher/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.voucher.index"}
			menuSelection={["/market/voucher"]}
			icon={<VoucherIcon/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<VoucherIcon/>}
					label={"market.voucher.label"}
				/>
			</Breadcrumbs>}
		>
			<VoucherProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={{
					cost: "asc",
				}}
			>
				<VoucherList/>
			</VoucherProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.voucher.index"}
			menuSelection={["/market/voucher"]}
			icon={<VoucherIcon/>}
			onBack={navigate => navigate("/market")}
		>
			vouchers
		</MobileMarketPage>
	</>;
});
