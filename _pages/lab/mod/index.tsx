import {ModIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {ModsFilterContext} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/../../../_site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/../../../_site/lab/@module/component";
import {ModCreateButton} from "@/puff-smith/../../../_site/lab/mod/@module/component/button/ModCreateButton";
import {ModTable} from "@/puff-smith/../../../_site/lab/mod/@module/table/ModTable";
import {ModFilter} from "@/puff-smith/../../../_site/lab/mod/@module/form/ModFilter";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mod"}
		menuSelection={['/lab/mod']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<ModIcon/>}
				label={'lab.mod.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<ModCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<ModCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<ModsFilterContext>
			<ModFilter/>
			<ModTable/>
		</ModsFilterContext>
	</LabPage>;
});
