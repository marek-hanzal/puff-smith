import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {CreateSetupForm, SetupListButton} from "@/puff-smith/site/lab/setup";
import {CreateTemplate} from "@leight-core/leight";

export default withLabLayout(function Create() {
	return <LabPage
		name={"lab.setup.create"}
		selected={['/lab/setup']}
		card={{
			extra: <>
				<SetupListButton/>
			</>
		}}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<SetupIcon/>}
			label={'lab.setup'}
		>
			<CreateSetupForm/>
		</CreateTemplate>
	</LabPage>;
});
