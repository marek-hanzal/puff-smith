import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildCreateButton, BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";
import {isMobile} from "react-device-detect";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build"}
		onBack={navigate => navigate('/lab')}
		menuSelection={['/lab/build']}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BuildIcon/>{t('lab.build.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile && <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
	>
		<Template
			icon={<BuildIcon/>}
			label={'lab.build'}
			span={24}
			mobileExtra={<>
				<ButtonBar>
					<BuildCreateButton type={'primary'}/>
					<BuildListButton/>
				</ButtonBar>
				<Divider/>
			</>}
		>
			<LatestBuildTable/>
		</Template>
		<Divider/>
	</LabPage>;
});
