import {BoosterIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {BoosterList} from "@/puff-smith/site/market/booster";
import {QuickFilter} from "@/puff-smith/site/shared/booster";
import {BoostersSourceControlProvider} from "@/sdk/api/booster/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.booster.index"}
		menuSelection={["/market/booster"]}
		icon={<BoosterIcon/>}
	>
		<BoostersSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
			defaultPage={0}
			defaultSize={10}
		>
			<BoosterList
				header={() => <QuickFilter/>}
			/>
		</BoostersSourceControlProvider>
	</MarketPage>;
});
