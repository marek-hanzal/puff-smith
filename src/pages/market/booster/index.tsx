import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BoosterList} from "@/puff-smith/site/market/booster/@module/list/BoosterList";
import {BoosterFilter} from "@/puff-smith/site/shared/booster/@module/filter/BoosterFilter";
import {BoosterProviderControl} from "@/sdk/api/booster/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.booster.index"}
		menuSelection={["/market/booster"]}
		icon={<BoosterIcon/>}
		withHelp={{
			translation: "market.booster.index",
		}}
	>
		<BoosterProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				vg: "desc",
			}}
		>
			<BoosterList
				header={() => <BoosterFilter/>}
			/>
		</BoosterProviderControl>
	</MarketPage>;
});
