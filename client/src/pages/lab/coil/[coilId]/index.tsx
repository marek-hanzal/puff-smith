import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {CoilCreateButton, CoilListButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <CoilPage
		title={"lab.coil.index"}
		collapsed
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/coil'}
				title={'lab.coil.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/list'}
				title={'lab.coil.list.label'}
			/>
			<BreadcrumbIcon
				icon={<CoilIcon/>}
				label={'lab.coil.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		{coil => <CoilPreview coil={coil}/>}
	</CoilPage>;
});
