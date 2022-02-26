import {Divider, Menu} from "antd";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/common";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PlotIcon} from "@/puff-smith";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidCreateButton";

export default withLabLayout(function Plot() {
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.plot"}
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
				selected={['median']}
			/>
			<Divider/>
			<VapeTable defaultFilter={{liquidIds: [liquid.id]}}/>
		</VapesFilterContext>}
	</LiquidPage>;
});
