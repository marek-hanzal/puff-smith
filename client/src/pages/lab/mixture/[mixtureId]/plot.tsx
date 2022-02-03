import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {MixtureCreateButton, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {ButtonLink, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.plot"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/[mixtureId]', {mixtureId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/mixture'}
					title={'lab.mixture.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/mixture/list'}
					title={'lab.mixture.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<MixtureListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{mixture => <>
			<LabMenu/>
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
