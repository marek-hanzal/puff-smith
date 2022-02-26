import {Divider, Menu} from "antd";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/common";
import {BarChartOutlined} from "@ant-design/icons";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {withLabLayout} from "@/puff-smith/../../../../_site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/../../../../_site/lab/@module/component";
import {VapeFilter} from "@/puff-smith/../../../../_site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/../../../../_site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/../../../../_site/lab/vape/@module/table/VapeTable";
import {MixtureCreateButton} from "@/puff-smith/../../../../_site/lab/mixture/@module/component/button/MixtureCreateButton";

export default withLabLayout(function Plot() {
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
				selected={['median']}
			/>
			<Divider/>
			<VapeTable defaultFilter={{mixtureIds: [mixture.id]}}/>
		</VapesFilterContext>}
	</MixturePage>;
});
