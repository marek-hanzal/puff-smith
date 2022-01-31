import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {CoilCloneButton, CoilCreateButton, CoilEditButton, CoilListButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Divider, Menu, Space} from "antd";

export default withLabLayout(function Index() {
	return <CoilPage
		title={"lab.coil.index"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		extra={<QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<CoilListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{coil => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<CoilIcon/>}
				label={'lab.coil.index'}
				extra={<>
					<Space>
						<CoilEditButton coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<CoilPreview coil={coil}/>
			</PreviewTemplate>
		</>}
	</CoilPage>;
});
