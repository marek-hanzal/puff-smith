import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {CreateTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.build.create"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<BuildIcon/>}
			label={'lab.build'}
		>
			<CreateBuildForm/>
		</CreateTemplate>
	</LabPage>;
});
