import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {MobilePage} from "@/puff-smith/component/MobilePage";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {MarketMenu} from "@/puff-smith/site/market/@module/menu/MarketMenu";
import {BrowserContent, Template} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserContent>
			<MarketPage
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
			</MarketPage>
		</BrowserContent>
		<MobilePage
			icon={<MarketIcon/>}
			title={"market.index"}
		>
			<MarketMenu/>
		</MobilePage>
	</>;
});
