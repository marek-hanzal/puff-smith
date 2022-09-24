import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";

export default withLabLayout(function Create() {
	return <MobileLabPage
		title={"lab.liquid.create"}
		icon={<LiquidIcon/>}
		onBack={navigate => navigate("/lab/liquid")}
	>

	</MobileLabPage>;
});
