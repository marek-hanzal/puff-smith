import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.liquid.list"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		extra={<QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<LiquidTable/>
	</LabPage>;
});
