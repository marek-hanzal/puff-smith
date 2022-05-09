import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mixture.index"}
		menuSelection={["/market/mixture"]}
		icon={<MixtureIcon/>}
	>
	</MarketPage>;
});
