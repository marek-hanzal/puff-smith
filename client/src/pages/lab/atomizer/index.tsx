import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, BreadcrumbButton} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {AtomizerCreateButton, AtomizerFilter, AtomizerListButton, AtomizerTable} from "@/puff-smith/site/lab/atomizer";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Breadcrumbs} from "@leight-core/leight/dist";

const AtomizerButtonBar = () => <ButtonBar>
	<AtomizerListButton size={'middle'}/>
	<AtomizerCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.atomizer"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<Space size={'small'}>
				<AtomizerIcon/>{t('lab.atomizer.label')}
			</Space>
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
		<Divider/>
	</LabPage>;
});
