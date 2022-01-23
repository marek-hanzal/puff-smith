import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Space} from "antd";
import {VapeCreateButton, VapeLink, VapeListButton, PatchVapeForm} from "@/puff-smith/site/lab/vape";
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
				extra={<VapeLink icon={<BackIcon/>} vape={vape} title={'lab.vape.link.button'}/>}
			>
				<PatchVapeForm vape={vape}/>
			</EditTemplate>
		</>}
	</VapePage>;
});
