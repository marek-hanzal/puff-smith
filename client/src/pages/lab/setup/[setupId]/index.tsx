import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {SetupCreateButton, SetupEditButton, SetupListButton, SetupPreview} from "@/puff-smith/site/lab/setup";
import {SetupPage} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {PreviewTemplate} from "@leight-core/leight";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <SetupPage
		name={"lab.setup.index"}
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
			<PreviewTemplate
				icon={<SetupIcon/>}
				label={'lab.setup.index'}
				extra={<Space>
					<SetupEditButton setup={setup}/>
				</Space>}
				span={24}
			>
				<SetupPreview setup={setup}/>
			</PreviewTemplate>
		</>}
	</SetupPage>;
});
