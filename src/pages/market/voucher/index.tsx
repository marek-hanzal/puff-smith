import {VoucherIcon} from "@/puff-smith/component/icon/VoucherIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {VoucherList} from "@/puff-smith/site/market/voucher/@module/list/VoucherList";
import {VouchersSourceControlProvider} from "@/sdk/api/voucher/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.voucher.index"}
		menuSelection={["/market/voucher"]}
		icon={<VoucherIcon/>}
	>
		<VouchersSourceControlProvider
			defaultOrderBy={{
				cost: "asc",
			}}
		>
			<VoucherList/>
		</VouchersSourceControlProvider>
	</MarketPage>;
});
