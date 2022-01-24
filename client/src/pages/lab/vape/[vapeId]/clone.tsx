import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Space} from "antd";
import {CreateVapeForm, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, CreateTemplate} from "@leight-core/leight";

export default withLabLayout(function Clone() {
	return <VapePage
		name={"lab.vape.clone"}
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
			<CreateTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<Space>
					<VapeLinkButton icon={<BackIcon/>} vape={vape} title={'lab.vape.link.button'}/>
				</Space>}
			>
				<CreateVapeForm vape={vape}/>
			</CreateTemplate>
		</>}
	</VapePage>;
});
