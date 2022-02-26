import {CoilIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {Menu} from "antd";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {withLabLayout} from "@/puff-smith/../../../_site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/../../../_site/lab/@module/component";
import {CoilCreateButton} from "@/puff-smith/../../../_site/lab/coil/@module/component/button/CoilCreateButton";
import {CoilFilter} from "@/puff-smith/../../../_site/lab/coil/@module/form/CoilFilter";
import {CoilTable} from "@/puff-smith/../../../_site/lab/coil/@module/table/CoilTable";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.coil"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CoilIcon/>}
				label={'lab.coil.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CoilCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<CoilsFilterContext>
			<CoilFilter/>
			<CoilTable/>
		</CoilsFilterContext>
	</LabPage>;
});
