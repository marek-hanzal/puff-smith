import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureTable} from "@/puff-smith/site/lab/mixture";

export default withLabLayout(function List() {
	return <LabPage
		name={"lab.mixture.list"}
		selected={['/lab/mixture']}
		card={{
			extra: <>
				<MixtureCreateButton/>
			</>
		}}
	>
		<LabMenu/>
		<MixtureTable/>
	</LabPage>;
});
