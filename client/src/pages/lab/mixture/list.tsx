import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureFilter, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {LiquidIcon} from "@/puff-smith";
import {MixturesFilterContext} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.mixture.list"}
		collapsed
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<BreadcrumbIcon
				icon={<LiquidIcon/>}
				label={'lab.mixture.list.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		<MixturesFilterContext>
			<MixtureFilter/>
			<MixtureTable/>
		</MixturesFilterContext>
	</LabPage>;
});
