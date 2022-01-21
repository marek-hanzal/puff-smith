import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildWizard} from "@/puff-smith/site/lab/wizard";

export default withLabLayout(function Build() {
	return <LabPage
		name={"lab.wizard.build"}
	>
		<LabMenu/>
		<BuildWizard/>
	</LabPage>;
});
