import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {VapeCloneButton, VapeCreateButton, VapeEditButton, VapeListButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PreviewTemplate} from "@leight-core/leight";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <VapePage
		name={"lab.vape.index"}
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
			<PreviewTemplate
				icon={<VapeIcon/>}
				label={'lab.vape.index'}
				extra={<Space>
					<VapeEditButton vape={vape}/>
					<VapeCloneButton vape={vape}/>
				</Space>}
				span={24}
			>
				<VapePreview vape={vape}/>
			</PreviewTemplate>
		</>}
	</VapePage>;
});
