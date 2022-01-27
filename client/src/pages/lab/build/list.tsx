import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildCreateButton, BuildTable} from "@/puff-smith/site/lab/build";
import {QuickMenu} from "@leight-core/leight/dist";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.build.list"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton type={'link'} size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<BuildTable/>
	</LabPage>;
});
