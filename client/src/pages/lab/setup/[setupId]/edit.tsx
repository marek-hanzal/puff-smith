import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {Space} from "antd";
import {PatchSetupForm, SetupCreateButton, SetupLinkButton, SetupListButton} from "@/puff-smith/site/lab/setup";
import {SetupPage} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <SetupPage
		name={"lab.setup.edit"}
		selected={['/lab/setup']}
		card={{
			extra: <Space>
				<SetupListButton/>
				<SetupCreateButton type={'link'}/>
			</Space>
		}}
	>
		{setup => <>
			<LabMenu/>
			<EditTemplate
				icon={<SetupIcon/>}
				label={'lab.setup'}
				extra={<Space>
					<SetupLinkButton icon={<BackIcon/>} setup={setup} title={'lab.setup.link.button'}/>
				</Space>}
			>
				<PatchSetupForm setup={setup}/>
			</EditTemplate>
		</>}
	</SetupPage>;
});
