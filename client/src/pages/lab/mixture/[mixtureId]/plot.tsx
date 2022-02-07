import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.plot"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/[mixtureId]', {mixtureId})}
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
				<BreadcrumbButton
					href={'/lab/mixture/[mixtureId]'}
					query={{mixtureId}}
					title={'lab.mixture.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BarChartOutlined/>{t('lab.mixture.plot.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<MixtureListButton/>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mixture => <>
			<VapesFilterContext defaultFilter={{mixtureIds: [mixture.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable defaultFilter={{mixtureIds: [mixture.id]}}/>
			</VapesFilterContext>
			<Divider/>
		</>}
	</MixturePage>;
});
