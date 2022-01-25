import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Space} from "antd";
import {PatchVapeForm, VapeCloneButton, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <VapePage
		name={"lab.vape.edit"}
		selected={['/lab/vape']}
		card={{
			extra: <Space>
				<VapeListButton/>
				<VapeCreateButton type={'link'}/>
			</Space>
		}}
	>
		{vape => <>
			<LabMenu/>
			<EditTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<Space>
					<VapeLinkButton icon={<BackIcon/>} vape={vape}/>
					<VapeCloneButton vape={vape}/>
				</Space>}
			>
				<PatchVapeForm vape={vape}/>
			</EditTemplate>
		</>}
	</VapePage>;
});