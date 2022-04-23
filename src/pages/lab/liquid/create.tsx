import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateView} from "@/puff-smith/site/lab/liquid";
import {ButtonBar, ButtonLink, ListIcon} from "@leight-core/client";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.liquid.create"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
		extra={<ButtonBar>
			<ButtonLink
				type={"primary"}
				ghost
				icon={<ListIcon/>}
				size={"large"}
				href={"/lab/liquid"}
				title={"lab.liquid.list.button"}
			/>
		</ButtonBar>}
	>
		<LiquidCreateView/>
	</LabPage>;
});
