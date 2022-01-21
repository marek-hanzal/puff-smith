import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {WizardIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.wizard"}
	>
		<LabMenu/>
		<Template
			icon={<WizardIcon/>}
			label={"lab.wizard"}
		/>
	</LabPage>;
});
