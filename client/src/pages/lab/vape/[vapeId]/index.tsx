import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {VapeCloneButton, VapeCreateButton, VapeEditButton, VapeListButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Divider, Menu, Space} from "antd";

export default withLabLayout(function Index() {
	return <VapePage
		title={"lab.vape.index"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
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
			<PreviewTemplate
				icon={<VapeIcon/>}
				label={'lab.vape.index'}
				extra={<>
					<Space>
						<VapeEditButton vape={vape}/>
						<VapeCloneButton vape={vape}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<VapePreview vape={vape}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
