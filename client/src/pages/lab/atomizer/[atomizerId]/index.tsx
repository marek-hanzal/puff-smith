import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, BreadcrumbButton, PlotIcon} from "@/puff-smith";
import {AtomizerCreateButton, AtomizerListButton, AtomizerPreview} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <AtomizerPage
		title={"lab.atomizer.index"}
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
			<Space size={'small'}>
				<AtomizerIcon/>{t('lab.atomizer.index.label')}
			</Space>
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
		{atomizer => <>
			<AtomizerPreview atomizer={atomizer}/>
			<Divider/>
		</>}
	</AtomizerPage>;
});
