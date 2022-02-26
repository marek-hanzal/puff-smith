import {PlotIcon, VapeIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateMenuItem, HomeIcon} from "@leight-core/common";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {withLabLayout} from "@/puff-smith/../../../_site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/../../../_site/lab/@module/component";
import {Menu} from "antd";
import {VapeDrawerCreateButton} from "@/puff-smith/../../../_site/lab/vape/@module/component/button/VapeDrawerCreateButton";
import {VapePlotButton} from "@/puff-smith/../../../_site/lab/vape/@module/component/button/VapePlotButton";
import {VapeFilter} from "@/puff-smith/../../../_site/lab/vape/@module/form/VapeFilter";
import {VapeTable} from "@/puff-smith/../../../_site/lab/vape/@module/table/VapeTable";
import {VapeCommentDrawerButton} from "@/puff-smith/../../../_site/lab/vape/@module/component/button/VapeCommentDrawerButton";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.plot", "/lab/vape/plot", <PlotIcon/>)}
			<Menu.Item>
				<VapeDrawerCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<VapeCommentDrawerButton/>
			<VapePlotButton/>
			<VapeDrawerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
