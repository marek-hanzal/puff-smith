import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildCreateButton, BuildEditButton, BuildListButton, BuildPreview} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Divider, Menu, Space} from "antd";

export default withLabLayout(function Index() {
	return <BuildPage
		title={"lab.build.index"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build/list')}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<BuildIcon/>}
				label={'lab.build.index'}
				extra={<>
					<Space>
						<BuildEditButton build={build}/>
						<BuildCloneButton build={build}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<BuildPreview build={build}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
