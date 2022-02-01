import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {ButtonBar, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {Divider} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab')}
	>
		<LabMenu/>
		<Template
			icon={<LiquidIcon/>}
			label={'lab.liquid'}
			span={24}
		>
			<ButtonBar>
				<LiquidCreateButton type={'primary'}/>
				<LiquidListButton size={'middle'}/>
			</ButtonBar>
		</Template>
		<Divider/>
	</LabPage>;
});
