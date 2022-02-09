import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CreateLiquidForm, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.liquid.create"}
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
			<BreadcrumbButton
				href={'/lab/liquid/list'}
				title={'lab.liquid.list.label'}
			/>
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.liquid.create.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<CreateTemplate>
			<CreateLiquidForm/>
		</CreateTemplate>
	</LabPage>;
});
