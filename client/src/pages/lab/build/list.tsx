import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildCreateButton, BuildTable} from "@/puff-smith/site/lab/build";

export default withLabLayout(function List() {
	return <LabPage
		name={"lab.build.list"}
		selected={['/lab/build']}
		card={{
			extra: <>
				<BuildCreateButton/>
			</>
		}}
	>
		<LabMenu/>
		<BuildTable/>
	</LabPage>;
});
