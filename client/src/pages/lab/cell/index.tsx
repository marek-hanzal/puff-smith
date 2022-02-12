import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CellIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {CellCreateButton, CellFilter, CellTable} from "@/puff-smith/site/lab/cell";
import {CellsFilterContext} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {Menu} from "antd";

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
