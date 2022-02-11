import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeDrawerCreateButton, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Divider, Menu} from "antd";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BarChartOutlined} from "@ant-design/icons";

const VapeButtonBar = () => <ButtonBar>
	<VapeDrawerCreateButton type={'primary'}/>
</ButtonBar>;

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
		extraBrowser={<VapeButtonBar/>}
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
