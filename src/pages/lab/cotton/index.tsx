import {CottonIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {CottonsFilterContext} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {CottonCreateButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonCreateButton";
import {CottonFilter} from "@/puff-smith/site/lab/cotton/@module/form/CottonFilter";
import {CottonTable} from "@/puff-smith/site/lab/cotton/@module/table/CottonTable";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton"}
		menuSelection={['/lab/cotton']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CottonIcon/>}
				label={'lab.cotton.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CottonCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CottonCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<CottonsFilterContext>
			<CottonFilter/>
			<CottonTable/>
		</CottonsFilterContext>
	</LabPage>;
});
