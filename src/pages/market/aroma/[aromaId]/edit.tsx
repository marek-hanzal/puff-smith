import {AromaIcon}        from "@/puff-smith/component/icon/AromaIcon";
import {nextAromaSource}  from "@/puff-smith/service/aroma/AromaSource";
import {IWithAroma}       from "@/puff-smith/service/aroma/interface";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaPatchForm}   from "@/puff-smith/ui/aroma/form/AromaPatchForm";

export default withMarketLayout(function Edit({aroma}: IWithAroma) {
	return <MobileMarketPage
		onBack={navigate => navigate("/market/aroma")}
		title={"market.aroma.edit"}
		values={{aroma}}
		menuSelection={[
			"/market/aroma",
			"/market/aroma/[aromaId]"
		]}
		icon={<AromaIcon/>}
	>
		<AromaPatchForm
			aroma={aroma}
			onSuccess={({navigate, response}) => {
				navigate("/market/aroma/[aromaId]", {aromaId: response.id});
			}}
		/>
	</MobileMarketPage>;
});

export const getServerSideProps = nextAromaSource();
