import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeTable} from "@/puff-smith/site/lab/vape";

export default withLabLayout(function List() {
	return <LabPage
		name={"lab.vape.list"}
		selected={['/lab/vape']}
		card={{
			extra: <>
				<VapeCreateButton/>
			</>
		}}
	>
		<LabMenu/>
		<VapeTable/>
	</LabPage>;
});
