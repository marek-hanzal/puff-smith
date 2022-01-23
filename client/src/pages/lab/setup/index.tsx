import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {SetupCreateButton, SetupListButton} from "@/puff-smith/site/lab/setup";
import {Template} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.setup"}
		selected={['/lab/setup']}
	>
		<LabMenu/>
		<Template
			icon={<SetupIcon/>}
			label={'lab.setup'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<SetupCreateButton/>
						<SetupListButton size={'middle'}/>
					</Space>
					<Divider/>
				</>
			}
			span={24}
		/>
	</LabPage>;
});
