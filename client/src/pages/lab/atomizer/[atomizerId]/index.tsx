import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, BreadcrumbButton, PlotIcon} from "@/puff-smith";
import {AtomizerCreateButton, AtomizerEditButton, AtomizerListButton, AtomizerPreview} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
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
		extra={({entity}) => isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.atomizer.button.plot', '/lab/atomizer/[atomizerId]/plot', <PlotIcon/>, {atomizerId: entity.id})}
		</LabMenuDrawerButton> : <ButtonBar>
			<AtomizerListButton/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <>
			<PreviewTemplate
				icon={<AtomizerIcon/>}
				title={atomizer.name}
				subTitle={atomizer.vendor.name}
				extra={<>
					<ButtonBar>
						<AtomizerEditButton atomizer={atomizer}/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			>
				<AtomizerPreview atomizer={atomizer}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</AtomizerPage>;
});
