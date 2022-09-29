import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidList} from "@/puff-smith/ui/liquid/list/LiquidList";
import {LiquidIndexBubble} from "@/puff-smith/ui/liquid/menu/LiquidIndexBubble";
import {LiquidProviderControl} from "@/sdk/api/liquid/query";

export default withLabLayout(function Index() {
	return <MobileLabPage
		title={"lab.liquid.index"}
		icon={<LiquidIcon/>}
		onBack={navigate => navigate("/lab")}
	>
		<LiquidIndexBubble/>
		<LiquidProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<LiquidList/>
		</LiquidProviderControl>
	</MobileLabPage>;
});
