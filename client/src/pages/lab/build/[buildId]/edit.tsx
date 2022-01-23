import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {Space} from "antd";
import {BuildCreateButton, BuildLink, BuildListButton, PatchBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <BuildPage
		name={"lab.build.edit"}
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
			<EditTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<BuildLink icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>}
			>
				<PatchBuildForm build={build}/>
			</EditTemplate>
		</>}
	</BuildPage>;
});
