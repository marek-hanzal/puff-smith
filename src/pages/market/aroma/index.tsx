import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {AromaList} from "@/puff-smith/site/market/aroma";
import {AromasSourceControlProvider} from "@/sdk/api/aroma/query";
import {LiquidIcon} from "@/puff-smith";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.aroma.index"}
		menuSelection={['/market/aroma']}
		icon={<LiquidIcon/>}
	>
		<AromasSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<AromaList/>
		</AromasSourceControlProvider>
	</MarketPage>;
});
