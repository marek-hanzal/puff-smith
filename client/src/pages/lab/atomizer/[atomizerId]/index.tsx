import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, PlotIcon} from "@/puff-smith";
import {AtomizerCreateButton, AtomizerListButton, AtomizerPreview} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	return <AtomizerPage
		title={"lab.atomizer.index"}
		collapsed
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/list')}
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
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.atomizer.button.plot', '/lab/atomizer/[atomizerId]/plot', <PlotIcon/>, {atomizerId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<AtomizerListButton/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <AtomizerPreview atomizer={atomizer}/>}
	</AtomizerPage>;
});
