import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaCreateForm} from "@/puff-smith/site/shared/aroma/@module/form/AromaCreateForm";
import {Template} from "@leight-core/client";

export default withMarketLayout(function Create() {
	return <BrowserMarketPage
		onBack={navigate => navigate("/market/aroma")}
		title={"market.aroma.create"}
		menuSelection={["/market/aroma"]}
		icon={<AromaIcon/>}
		withHelp={{
			translation: "market.aroma.create",
		}}
	>
		<Template span={14}>
			<AromaCreateForm
				onSuccess={({response, navigate}) => {
					navigate("/market/aroma/[aromaId]", {
						aromaId: response.id,
					});
				}}
			/>
		</Template>
	</BrowserMarketPage>;
});
