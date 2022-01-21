import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {BuildWizard} from "@/puff-smith/site/lab/wizard";

export default withLabLayout(function Build() {
	return <LabPage
		name={"lab.wizard.build"}
	>
		<LabMenu/>
		<Template
			icon={<BuildIcon/>}
			label={"lab.wizard.build"}
		>
			<BuildWizard/>
		</Template>
	</LabPage>;
});
