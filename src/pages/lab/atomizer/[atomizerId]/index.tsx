import {AtomizerIcon, PlotIcon} from "@/puff-smith";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {AtomizerCreateButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCreateButton";
import {AtomizerPlotButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPlotButton";
import {AtomizerPreview} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerPreview";

export default withLabLayout(function Index() {
	return <AtomizerPage
		title={"lab.atomizer.index"}
		menuSelection={['/lab/atomizer']}
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
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			<Menu.Item>
				<AtomizerCreateButton/>
			</Menu.Item>
			{CreateMenuItem('lab.atomizer.button.plot', '/lab/atomizer/[atomizerId]/plot', <PlotIcon/>, {atomizerId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<AtomizerPlotButton atomizer={entity}/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <AtomizerPreview atomizer={atomizer}/>}
	</AtomizerPage>;
});
