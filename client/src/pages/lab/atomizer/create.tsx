import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerListButton, CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";

const AtomizerButtonBar = () => <ButtonBar>
	<AtomizerListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.atomizer.create"}
		menuSelection={['/lab/atomizer']}
		collapsed
		onBack={navigate => navigate('/lab/atomizer')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer'}
				title={'lab.atomizer.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/list'}
				title={'lab.atomizer.list.label'}
			/>
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.atomizer.create.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<AtomizerButtonBar/>}
	>
		<CreateTemplate>
			<CreateAtomizerForm/>
		</CreateTemplate>
	</LabPage>;
});
