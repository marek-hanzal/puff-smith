import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon, PlotIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureInline, MixtureListButton, MixturePlotButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <MixturePage
		title={"lab.mixture.index"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/list')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture'}
					title={'lab.mixture.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture/list'}
					title={'lab.mixture.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<MixtureIcon/>{t('lab.mixture.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={({entity}) => isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.mixture.button.plot', '/lab/mixture/[mixtureId]/plot', <PlotIcon/>, {mixtureId: entity.id})}
		</LabMenuDrawerButton> : <Space>
			{entity && <MixturePlotButton mixture={entity}/>}
			<MixtureListButton/>
			<MixtureCreateButton type={'primary'}/>
		</Space>}
	>
		{mixture => <>
			<PreviewTemplate
				icon={<MixtureIcon/>}
				title={<MixtureInline mixture={mixture}/>}
				extra={<>
					<MixtureEditButton mixture={mixture}/>
					<Divider/>
				</>}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</MixturePage>;
});
