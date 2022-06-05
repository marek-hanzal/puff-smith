import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaEditForm} from "@/puff-smith/site/shared/aroma/@module/form/AromaEditForm";
import {EditIcon, Template} from "@leight-core/client";

export default withMarketLayout(function Edit({aroma}: IAromaFetch) {
	return <MarketPage
		onBack={navigate => navigate("/market/aroma/[aromaId]", {aromaId: aroma.id})}
		title={"market.aroma.aroma"}
		tabTitle={"market.aroma.edit.title.tab"}
		values={{aroma}}
		components={TransComponents}
		menuSelection={["/market/aroma"]}
		icon={<EditIcon/>}
		withHelp={{
			translation: "market.aroma.edit",
		}}
	>
		<Template span={14}>
			<AromaEditForm
				aroma={aroma}
				onSuccess={({response, navigate}) => {
					navigate("/market/aroma/[aromaId]", {
						aromaId: response.id,
					});
				}}
			/>
		</Template>
	</MarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
