import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupCreateButton, SetupTable} from "@/puff-smith/site/lab/setup";
import {QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.setup.list"}
		selected={['/lab/setup']}
		onBack={navigate => navigate('/lab/setup')}
		extra={<QuickMenu>
			<Menu.Item>
				<SetupCreateButton type={'link'} size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<SetupTable/>
	</LabPage>;
});
