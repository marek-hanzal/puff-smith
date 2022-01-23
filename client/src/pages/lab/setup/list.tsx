import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupCreateButton, SetupTable} from "@/puff-smith/site/lab/setup";

export default withLabLayout(function List() {
	return <LabPage
		name={"lab.setup.list"}
		selected={['/lab/setup']}
		card={{
			extra: <>
				<SetupCreateButton/>
			</>
		}}
	>
		<LabMenu/>
		<SetupTable/>
	</LabPage>;
});
