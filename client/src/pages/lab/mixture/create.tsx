import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CreateMixtureForm, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureListButton/>
</ButtonBar>

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.mixture.create"}
		collapsed
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<BreadcrumbButton
				href={'/lab/mixture/list'}
				title={'lab.mixture.list.label'}
			/>
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.mixture.create.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		<Template>
			<CreateMixtureForm/>
		</Template>
	</LabPage>;
});
