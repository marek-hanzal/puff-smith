import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {ButtonBar, Template} from "@leight-core/leight";
import {CoilCreateButton, CoilListButton} from "@/puff-smith/site/lab/coil";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.coil"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
	>
		<LabMenu/>
		<Template
			icon={<CoilIcon/>}
			label={'lab.coil'}
			span={24}
		>
			<ButtonBar>
				<CoilCreateButton type={'primary'}/>
				<CoilListButton size={'middle'}/>
			</ButtonBar>
		</Template>
	</LabPage>;
});
