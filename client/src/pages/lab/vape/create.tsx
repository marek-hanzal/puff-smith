import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CreateVapeForm, VapeListButton} from "@/puff-smith/site/lab/vape";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.vape.create"}
		collapsed
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbButton
				href={'/lab/vape/list'}
				title={'lab.vape.list.label'}
			/>
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.vape.create.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.list", "/lab/vape/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<Template>
			<CreateVapeForm/>
		</Template>
	</LabPage>;
});
