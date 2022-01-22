import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildTable} from "@/puff-smith/site/lab/build";
import {BuildCreateButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCreateButton";

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
