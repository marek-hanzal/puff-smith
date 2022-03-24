import {VoucherIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {VouchersList} from "@/puff-smith/site/market/voucher";
import {VouchersSourceControlProvider} from "@/sdk/api/voucher/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.voucher.index"}
		menuSelection={['/market/voucher']}
		icon={<VoucherIcon/>}
	>
		<VouchersSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<VouchersList/>
		</VouchersSourceControlProvider>
	</MarketPage>;
});
