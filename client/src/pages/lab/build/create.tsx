import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildPageMenu, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {CreateTemplate} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.build.create"}
	>
		<LabMenu/>
		<BuildPageMenu/>
		<CreateTemplate
			icon={<BuildIcon/>}
			label={'lab.build'}
		>
			<CreateBuildForm/>
		</CreateTemplate>
	</LabPage>;
});
