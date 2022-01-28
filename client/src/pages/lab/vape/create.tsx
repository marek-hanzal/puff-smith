import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {CreateVapeForm, VapeListButton} from "@/puff-smith/site/lab/vape";
import {CreateTemplate, QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.vape.create"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		extra={<QuickMenu>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<VapeIcon/>}
			label={'lab.vape'}
		>
			<CreateVapeForm/>
		</CreateTemplate>
	</LabPage>;
});
