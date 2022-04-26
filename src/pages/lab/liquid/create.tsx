import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidCreateView} from "@/puff-smith/site/lab/liquid/@module/view/LiquidCreateView";
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
		<LiquidCreateView
			onSuccess={({navigate}) => {
				navigate("/lab/liquid");
			}}
		/>
	</LabPage>;
});
