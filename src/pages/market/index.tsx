import {FullLogoIcon} from "@/puff-smith";
import {HomeIcon, Template} from "@leight-core/client";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.index"}
		menuSelection={['/market']}
		icon={<HomeIcon/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={'market.home'}
		/>
	</MarketPage>;
});
