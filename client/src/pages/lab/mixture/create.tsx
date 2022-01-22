import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {MixtureListButton, CreateMixtureForm} from "@/puff-smith/site/lab/mixture";
import {CreateTemplate, useMenuContext} from "@leight-core/leight";

export default withLabLayout(function Create() {
	return <LabPage
		name={"lab.mixture.create"}
		selected={['/lab/mixture']}
		card={{
			extra: <>
				<MixtureListButton/>
			</>
		}}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
		>
			<CreateMixtureForm/>
		</CreateTemplate>
	</LabPage>;
});
