import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidFilter, LiquidListButton, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {Divider} from "antd";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidListButton size={'middle'}/>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>;

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
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<LiquidButtonBar/>
				<Divider/>
			</>}
		>
			<LiquidsFilterContext>
				<LiquidFilter/>
				<LiquidTable/>
			</LiquidsFilterContext>
		</Template>
	</LabPage>;
});
