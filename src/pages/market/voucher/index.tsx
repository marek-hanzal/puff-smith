import {VoucherIcon} from "@/puff-smith/component/icon/VoucherIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {VoucherList} from "@/puff-smith/site/market/voucher/@module/list/VoucherList";
import {VoucherProviderControl} from "@/sdk/api/voucher/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.voucher.index"}
		menuSelection={["/market/voucher"]}
		icon={<VoucherIcon/>}
	>
		<VoucherProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				cost: "asc",
			}}
		>
			<VoucherList/>
		</VoucherProviderControl>
	</MarketPage>;
});
