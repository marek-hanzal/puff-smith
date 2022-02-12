import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CottonIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {CottonCreateButton, CottonFilter, CottonTable} from "@/puff-smith/site/lab/cotton";
import {CottonsFilterContext} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {Menu} from "antd";

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
