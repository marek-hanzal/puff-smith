import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilCreateButton, CoilTable} from "@/puff-smith/site/lab/coil";
import {QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.coil.list"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		extra={<QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CoilTable/>
	</LabPage>;
});
