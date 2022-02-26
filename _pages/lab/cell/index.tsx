import {CellIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {CellsFilterContext} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/../../../_site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/../../../_site/lab/@module/component";
import {CellCreateButton} from "@/puff-smith/../../../_site/lab/cell/@module/component/button/CellCreateButton";
import {CellFilter} from "@/puff-smith/../../../_site/lab/cell/@module/form/CellFilter";
import {CellTable} from "@/puff-smith/../../../_site/lab/cell/@module/table/CellTable";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell"}
		menuSelection={['/lab/cell']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={'lab.cell.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CellCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CellCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<CellsFilterContext>
			<CellFilter/>
			<CellTable/>
		</CellsFilterContext>
	</LabPage>;
});
