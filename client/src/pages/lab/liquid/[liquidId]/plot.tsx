import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider, Menu} from "antd";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/leight";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";
import {PlotIcon} from "@/puff-smith";

export default withLabLayout(function Plot() {
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.plot"}
		collapsed
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<BreadcrumbButton
				href={'/lab/liquid/[liquidId]'}
				query={{liquidId}}
				title={'lab.liquid.index.label'}
			/>
			<BreadcrumbIcon
				icon={<PlotIcon/>}
				label={'lab.liquid.plot.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<LiquidCreateButton type={'primary'}/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{liquid => <VapesFilterContext defaultFilter={{liquidIds: [liquid.id]}}>
			<VapeFilter disabled={['atomizerIds']}/>
			<VapePlot
				selected={['median', 'count']}
			/>
			<Divider/>
			<VapeTable defaultFilter={{liquidIds: [liquid.id]}}/>
		</VapesFilterContext>}
	</LiquidPage>;
});
