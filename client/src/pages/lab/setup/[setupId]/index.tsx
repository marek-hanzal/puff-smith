import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {SetupCreateButton, SetupEditButton, SetupListButton, SetupPreview} from "@/puff-smith/site/lab/setup";
import {SetupPage} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {PreviewTemplate} from "@leight-core/leight";
import {Divider, Menu, Space} from "antd";
import {QuickMenu} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	return <SetupPage
		title={"lab.setup.index"}
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
			<PreviewTemplate
				icon={<SetupIcon/>}
				label={'lab.setup.index'}
				extra={<>
					<Space>
						<SetupEditButton setup={setup}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<SetupPreview setup={setup}/>
			</PreviewTemplate>
		</>}
	</SetupPage>;
});
