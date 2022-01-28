import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {CreateSetupForm, SetupListButton} from "@/puff-smith/site/lab/setup";
import {CreateTemplate, QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.setup.create"}
		selected={['/lab/setup']}
		onBack={navigate => navigate('/lab/setup')}
		extra={<QuickMenu>
			<Menu.Item>
				<SetupListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<SetupIcon/>}
			label={'lab.setup'}
		>
			<CreateSetupForm/>
		</CreateTemplate>
	</LabPage>;
});
