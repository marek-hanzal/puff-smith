import {LiquidIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidCreateButton";
import {LiquidFilter} from "@/puff-smith/site/lab/liquid/@module/form/LiquidFilter";
import {LiquidTable} from "@/puff-smith/site/lab/liquid/@module/table/LiquidTable";
import {LiquidCommentDrawerButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidCommentDrawerButton";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<LiquidIcon/>}
				label={'lab.liquid.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<LiquidCommentDrawerButton/>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<LiquidsFilterContext>
			<LiquidFilter/>
			<LiquidTable/>
		</LiquidsFilterContext>
	</LabPage>;
});
