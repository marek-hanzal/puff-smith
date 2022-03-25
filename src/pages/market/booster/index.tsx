import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {BoostersList} from "@/puff-smith/site/market/booster";
import {BoostersSourceControlProvider} from "@/sdk/api/booster/query";
import {BoosterIcon} from "@/puff-smith";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.booster.index"}
		menuSelection={['/market/booster']}
		icon={<BoosterIcon/>}
	>
		<BoostersSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<BoostersList/>
		</BoostersSourceControlProvider>
	</MarketPage>;
});
