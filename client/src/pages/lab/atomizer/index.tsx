import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon} from "@/puff-smith";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {AtomizerCreateButton, AtomizerFilter, AtomizerListButton, AtomizerTable} from "@/puff-smith/site/lab/atomizer";
import {Divider} from "antd";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const AtomizerButtonBar = () => <ButtonBar>
	<AtomizerListButton size={'middle'}/>
	<AtomizerCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.atomizer"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<AtomizerButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<AtomizerButtonBar/>
				<Divider/>
			</>}
		>
			<AtomizersFilterContext>
				<AtomizerFilter/>
				<AtomizerTable/>
			</AtomizersFilterContext>
		</Template>
	</LabPage>;
});
