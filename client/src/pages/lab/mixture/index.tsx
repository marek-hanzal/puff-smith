import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Divider} from "antd";
import {MixtureCreateButton, MixtureListButton, RecentMixtureTable} from "@/puff-smith/site/lab/mixture";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureListButton size={'middle'}/>
	<MixtureCreateButton type={'primary'}/>
</ButtonBar>;

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
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<MixtureButtonBar/>
				<Divider/>
			</>}
		>
			<RecentMixtureTable/>
		</Template>
		<Divider/>
	</LabPage>;
});
