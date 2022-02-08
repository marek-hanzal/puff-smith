import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {CoilCreateButton, CoilFilter, CoilListButton, CoilTable} from "@/puff-smith/site/lab/coil";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {Breadcrumbs} from "@leight-core/leight/dist";

const CoilButtonBar = () => {
	return <ButtonBar>
		<CoilListButton size={'middle'}/>
		<CoilCreateButton type={'primary'}/>
	</ButtonBar>;
}

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<Space size={'small'}>
				<CoilIcon/>{t('lab.coil.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<CoilButtonBar/>
				<Divider/>
			</>}
		>
			<CoilsFilterContext>
				<CoilFilter/>
				<CoilTable/>
			</CoilsFilterContext>
		</Template>
		<Divider/>
	</LabPage>;
});
