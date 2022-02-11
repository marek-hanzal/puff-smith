import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {PlotIcon, VapeIcon} from "@/puff-smith";
import {VapeDrawerCreateButton, VapeFilter, VapePlotButton, VapeTable} from "@/puff-smith/site/lab/vape";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";

const VapeButtonBar = () => <ButtonBar>
	<VapePlotButton/>
	<VapeDrawerCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.plot", "/lab/vape/plot", <PlotIcon/>)}
			{CreateMenuItem("lab.vape.button.create", "/lab/vape/create", <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
