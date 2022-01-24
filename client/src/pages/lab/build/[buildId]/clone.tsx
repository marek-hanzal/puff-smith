import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {Space} from "antd";
import {BuildCreateButton, BuildLinkButton, BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon} from "@leight-core/leight";
import {CreateTemplate} from "@leight-core/leight/dist";

export default withLabLayout(function Clone() {
	return <BuildPage
		name={"lab.build.clone"}
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
			<CreateTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<Space>
					<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
				</Space>}
			>
				<CreateBuildForm build={build}/>
			</CreateTemplate>
		</>}
	</BuildPage>;
});
