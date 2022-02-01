import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {CreateLiquidForm, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {CreateTemplate, QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.liquid.create"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		extra={<QuickMenu>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<LiquidIcon/>}
			label={'lab.liquid'}
		>
			<CreateLiquidForm/>
		</CreateTemplate>
	</LabPage>;
});
