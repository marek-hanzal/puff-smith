import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {Template} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.create"}
			icon={<AromaIcon/>}
			onBack={navigate => navigate("/market/aroma")}
		>
			<Template
				style={{padding: "0 1em"}}
				mobileExtra={<AromaCreateForm/>}
			/>
		</MobileMarketPage>
	</>;
});
