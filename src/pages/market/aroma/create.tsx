import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.create"}
			icon={<AromaIcon/>}
			onBack={navigate => navigate("/market/aroma")}
		>
			<AromaCreateForm/>
		</MobileMarketPage>
	</>;
});
