import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeTable} from "@/puff-smith/site/lab/vape";
import {QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.vape.list"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		extra={<QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<VapeTable/>
	</LabPage>;
});
