import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Menu} from "antd";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {QuickMenu} from "@leight-core/leight";
import {CreateVapeForm, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {CreateTemplate} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	return <BuildPage
		title={"lab.vape.create"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		extra={<QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<CreateTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
			>
				<CreateVapeForm vape={{build, buildId: build.id}}/>
			</CreateTemplate>
		</>}
	</BuildPage>;
});
