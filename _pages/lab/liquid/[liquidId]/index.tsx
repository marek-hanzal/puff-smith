import {LiquidIcon, PlotIcon} from "@/puff-smith";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateMenuItem, HomeIcon} from "@leight-core/common";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/../../../../_site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/../../../../_site/lab/@module/component";
import {LiquidCreateButton} from "@/puff-smith/../../../../_site/lab/liquid/@module/component/button/LiquidCreateButton";
import {LiquidPlotButton} from "@/puff-smith/../../../../_site/lab/liquid/@module/component/button/LiquidPlotButton";
import {LiquidPreview} from "@/puff-smith/../../../../_site/lab/liquid/@module/component/LiquidPreview";

export default withLabLayout(function Index() {
	return <LiquidPage
		title={"lab.liquid.index"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<BreadcrumbIcon
				icon={<LiquidIcon/>}
				label={'lab.liquid.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			{CreateMenuItem('lab.liquid.button.plot', '/lab/liquid/[liquidId]/plot', <PlotIcon/>, {liquidId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<LiquidPlotButton liquid={entity}/>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{liquid => <LiquidPreview liquid={liquid}/>}
	</LiquidPage>;
});
