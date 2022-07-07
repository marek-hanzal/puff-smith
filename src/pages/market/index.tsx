import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {MarketMenu} from "@/puff-smith/site/market/@module/menu/MarketMenu";
import {Template} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.index"}
			menuSelection={["/market"]}
			icon={<MarketIcon/>}
			header={null}
		>

			<Template
				style={{}}
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"market.home"}
			/>
		</BrowserMarketPage>
		<MobileMarketPage>
			<MarketMenu/>
		</MobileMarketPage>
	</>;
});
