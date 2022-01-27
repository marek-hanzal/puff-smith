import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {ButtonBar, Template} from "@leight-core/leight";
import {SetupCreateButton, SetupListButton} from "@/puff-smith/site/lab/setup";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.setup"}
		selected={['/lab/setup']}
		onBack={navigate => navigate('/lab')}
	>
		<LabMenu/>
		<Template
			icon={<SetupIcon/>}
			label={'lab.setup'}
			span={24}
		>
			<ButtonBar>
				<SetupCreateButton type={'primary'}/>
				<SetupListButton size={'middle'}/>
			</ButtonBar>
		</Template>
	</LabPage>;
});
