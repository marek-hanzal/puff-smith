import {AromaIcon}        from "@/puff-smith/component/icon/AromaIcon";
import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch}      from "@/puff-smith/service/aroma/interface";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaAromaBubble} from "@/puff-smith/ui/aroma/menu/AromaAromaBubble";
import {AromaView}        from "@/puff-smith/ui/aroma/view/AromaView";

export default withMarketLayout(function Index({aroma}: IAromaFetch) {
	return <MobileMarketPage
		onBack={navigate => navigate("/market/aroma")}
		title={"market.aroma.aroma"}
		values={{aroma}}
		menuSelection={[
			"/market/aroma",
			"/market/aroma/[aromaId]"
		]}
		icon={<AromaIcon/>}
	>
		<AromaAromaBubble aroma={aroma}/>
		<AromaView aroma={aroma}/>
	</MobileMarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
