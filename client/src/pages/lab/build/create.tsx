import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {CreateTemplate} from "@leight-core/leight";

export default withLabLayout(function Create() {
	return <LabPage
		name={"lab.build.create"}
		selected={['/lab/build']}
		card={{
			extra: <>
				<BuildListButton/>
			</>
		}}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<BuildIcon/>}
			label={'lab.build'}
		>
			<CreateBuildForm/>
		</CreateTemplate>
	</LabPage>;
});
