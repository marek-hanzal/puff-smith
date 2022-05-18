import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {HomeIcon, Template} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.index"}
		menuSelection={["/market"]}
		icon={<HomeIcon/>}
	>
		<Template
			style={{}}
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"market.home"}
		/>
	</MarketPage>;
});
