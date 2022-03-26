import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {BaseList} from "@/puff-smith/site/market/base";
import {BasesSourceControlProvider} from "@/sdk/api/base/query";
import {BaseIcon} from "@/puff-smith";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.base.index"}
		menuSelection={['/market/base']}
		icon={<BaseIcon/>}
	>
		<BasesSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<BaseList/>
		</BasesSourceControlProvider>
	</MarketPage>;
});
