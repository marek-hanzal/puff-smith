import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BubbleMenu} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <MobileLabPage
		title={"lab.liquid.index"}
		icon={<LiquidIcon/>}
		onBack={navigate => navigate("/lab")}
	>
		<BubbleMenu
			translation={"lab.liquid"}
			actions={[
				{
					key: "create.button",
					bold: true,
					onClick: ({navigate}) => navigate("/lab/liquid/create"),
				},
			]}
		/>
	</MobileLabPage>;
});
