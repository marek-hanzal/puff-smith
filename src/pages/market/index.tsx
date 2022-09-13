import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {MarketMenu} from "@/puff-smith/site/market/@module/menu/MarketMenu";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage>
			<MarketMenu/>
		</MobileMarketPage>
	</>;
});
