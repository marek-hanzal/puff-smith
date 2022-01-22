import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {VapeListButton, CreateVapeForm} from "@/puff-smith/site/lab/vape";
import {CreateTemplate, useMenuContext} from "@leight-core/leight";

export default withLabLayout(function Create() {
	return <LabPage
		name={"lab.vape.create"}
		selected={['/lab/vape']}
		card={{
			extra: <>
				<VapeListButton/>
			</>
		}}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<VapeIcon/>}
			label={'lab.vape'}
		>
			<CreateVapeForm/>
		</CreateTemplate>
	</LabPage>;
});
