import {MixtureIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {MixturesFilterContext} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {MixtureCreateButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureCreateButton";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/form/MixtureFilter";
import {MixtureTable} from "@/puff-smith/site/lab/mixture/@module/table/MixtureTable";
import {MixtureCommentDrawerButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureCommentDrawerButton";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<MixtureIcon/>}
				label={'lab.mixture.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<MixtureCommentDrawerButton/>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<MixturesFilterContext>
			<MixtureFilter/>
			<MixtureTable/>
		</MixturesFilterContext>
	</LabPage>;
});
