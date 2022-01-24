import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildCreateButton, BuildEditButton, BuildListButton, BuildPreview} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {PreviewTemplate} from "@leight-core/leight";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <BuildPage
		name={"lab.build.index"}
		selected={['/lab/build']}
		card={{
			extra: <Space>
				<BuildListButton/>
				<BuildCreateButton type={'link'}/>
			</Space>
		}}
	>
		{build => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<BuildIcon/>}
				label={'lab.build.index'}
				extra={<Space>
					<BuildEditButton build={build}/>
					<BuildCloneButton build={build}/>
				</Space>}
				span={24}
			>
				<BuildPreview build={build}/>
			</PreviewTemplate>
		</>}
	</BuildPage>;
});
