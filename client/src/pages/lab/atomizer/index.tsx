import {AtomizerIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {AtomizerCreateButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCreateButton";
import {AtomizerFilter} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerFilter";
import {AtomizerTable} from "@/puff-smith/site/lab/atomizer/@module/table/AtomizerTable";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.atomizer"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<AtomizerCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<AtomizersFilterContext>
			<AtomizerFilter/>
			<AtomizerTable/>
		</AtomizersFilterContext>
	</LabPage>;
});
