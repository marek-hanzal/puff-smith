import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {BuildCreateButton, BuildLinkButton, BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, CreateTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Clone() {
	return <BuildPage
		title={"lab.build.clone"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton size={'small'}/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<CreateTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<>
					<Space>
						<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateBuildForm build={build}/>
			</CreateTemplate>
		</>}
	</BuildPage>;
});
