import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {defaults} from "@/puff-smith/service";
import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu, AromaIndexMenuWidth} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {AromaView} from "@/puff-smith/site/market/aroma/@module/view/AromaView";

export default withMarketLayout(function Index({aroma}: IAromaFetchProps) {
	return <MarketPage
		title={"market.aroma.aroma"}
		tabTitle={"market.aroma.aroma.title.tab"}
		values={{aroma}}
		components={TransComponents}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]"]}
		icon={<LiquidIcon/>}
		extra={<AromaIndexMenu aroma={aroma}/>}
		extraSize={AromaIndexMenuWidth}
	>
		<AromaView aroma={aroma}/>
	</MarketPage>;
});

export const getServerSideProps = AromaRepository(defaults()).pageFetch("aroma", "aromaId");
