import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {CreateVapeForm, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, CreateTemplate, QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Clone() {
	return <VapePage
		title={"lab.vape.clone"}
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
		{vape => <>
			<LabMenu/>
			<CreateTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<>
					<Space>
						<VapeLinkButton icon={<BackIcon/>} vape={vape} title={'lab.vape.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateVapeForm vape={vape}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
