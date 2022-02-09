import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidFilter, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.liquid.list"}
		collapsed
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<BreadcrumbIcon
				icon={<ListIcon/>}
				label={'lab.liquid.list.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<LiquidsFilterContext>
			<LiquidFilter/>
			<LiquidTable/>
		</LiquidsFilterContext>
	</LabPage>;
});
