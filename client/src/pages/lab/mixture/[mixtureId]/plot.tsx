import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton} from "@/puff-smith";
import {Breadcrumbs} from "@leight-core/leight/dist";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureListButton/>
	<MixtureCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.plot"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/[mixtureId]', {mixtureId})}
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
			<BreadcrumbButton
				href={'/lab/mixture/[mixtureId]'}
				query={{mixtureId}}
				title={'lab.mixture.index.label'}
			/>
			<Space size={'small'}>
				<BarChartOutlined/>{t('lab.mixture.plot.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
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
