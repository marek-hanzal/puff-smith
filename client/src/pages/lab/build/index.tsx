import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildCreateButton, BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";
import {Breadcrumbs} from "@leight-core/leight/dist";

const BuildButtonBar = () => {
	return <ButtonBar>
		<BuildListButton/>
		<BuildCreateButton type={'primary'}/>
	</ButtonBar>;
}

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build"}
		onBack={navigate => navigate('/lab')}
		menuSelection={['/lab/build']}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<Space size={'small'}>
				<BuildIcon/>{t('lab.build.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<BuildButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<BuildButtonBar/>
				<Divider/>
			</>}
		>
			<LatestBuildTable/>
		</Template>
		<Divider/>
	</LabPage>;
});
