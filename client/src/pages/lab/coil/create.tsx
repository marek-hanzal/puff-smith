import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {CreateTemplate, QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.coil.create"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		extra={<QuickMenu>
			<Menu.Item>
				<CoilListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<CoilIcon/>}
			label={'lab.coil'}
		>
			<CreateCoilForm/>
		</CreateTemplate>
	</LabPage>;
});
