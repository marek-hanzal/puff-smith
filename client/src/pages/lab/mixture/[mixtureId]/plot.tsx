import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider, Menu} from "antd";
import {MixtureCreateButton} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/leight";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Plot() {
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.plot"}
		collapsed
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
				href={'/lab/mixture/[mixtureId]'}
				query={{mixtureId}}
				title={'lab.mixture.index.label'}
			/>
			<BreadcrumbIcon
				icon={<BarChartOutlined/>}
				label={'lab.mixture.plot.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mixture => <VapesFilterContext defaultFilter={{mixtureIds: [mixture.id]}}>
			<VapeFilter disabled={['atomizerIds']}/>
			<VapePlot
				selected={['median', 'count']}
			/>
			<Divider/>
			<VapeTable defaultFilter={{mixtureIds: [mixture.id]}}/>
		</VapesFilterContext>}
	</MixturePage>;
});
