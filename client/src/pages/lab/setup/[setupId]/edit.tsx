import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {PatchSetupForm, SetupCreateButton, SetupLinkButton, SetupListButton} from "@/puff-smith/site/lab/setup";
import {SetupPage} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <SetupPage
		title={"lab.setup.edit"}
		selected={['/lab/setup']}
		onBack={navigate => navigate('/lab/setup')}
		extra={<QuickMenu>
			<Menu.Item>
				<SetupCreateButton size={'small'}/>
			</Menu.Item>
			<Menu.Item>
				<SetupListButton size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		{setup => <>
			<LabMenu/>
			<EditTemplate
				icon={<SetupIcon/>}
				label={'lab.setup'}
				extra={<>
					<Space>
						<SetupLinkButton icon={<BackIcon/>} setup={setup} title={'lab.setup.link.button'}/>
					</Space>
					<Divider/>
				</>
				}
			>
				<PatchSetupForm setup={setup}/>
			</EditTemplate>
		</>}
	</SetupPage>;
});
