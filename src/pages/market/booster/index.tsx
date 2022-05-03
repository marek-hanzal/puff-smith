import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BoosterList} from "@/puff-smith/site/market/booster/@module/list/BoosterList";
import {BoosterFilter} from "@/puff-smith/site/shared/booster/@module/filter/BoosterFilter";
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
		>
			<BoosterList
				header={() => <BoosterFilter/>}
			/>
		</BoostersSourceControlProvider>
	</MarketPage>;
});
