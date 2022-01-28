import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {PatchVapeForm, VapeCloneButton, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <VapePage
		title={"lab.vape.edit"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		extra={<QuickMenu>
			<Menu.Item>
				<VapeCreateButton size={'small'}/>
			</Menu.Item>
			<Menu.Item>
				<VapeListButton size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		{vape => <>
			<LabMenu/>
			<EditTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<>
					<Space>
						<VapeLinkButton icon={<BackIcon/>} vape={vape}/>
						<VapeCloneButton vape={vape}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchVapeForm vape={vape}/>
			</EditTemplate>
		</>}
	</VapePage>;
});
