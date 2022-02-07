import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {CreateIcon, CreateTemplate, HomeIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.build.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <>
			<LabMenuDrawerButton>
				{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
			</LabMenuDrawerButton>
		</> : <Space>
			<BuildListButton/>
		</Space>}
	>
		<CreateTemplate>
			<CreateBuildForm/>
		</CreateTemplate>
	</LabPage>;
});
