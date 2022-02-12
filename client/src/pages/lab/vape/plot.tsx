import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Divider, Menu} from "antd";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BarChartOutlined} from "@ant-design/icons";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {VapeDrawerCreateButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeDrawerCreateButton";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.vape.plot"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbIcon
				icon={<BarChartOutlined/>}
				label={'lab.vape.plot.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<VapeDrawerCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<VapeDrawerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapePlot
				selected={['median']}
			/>
			<Divider/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
