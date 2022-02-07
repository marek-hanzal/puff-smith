import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildCreateButton, BuildFilter, BuildTable} from "@/puff-smith/site/lab/build";
import {HomeIcon, ListIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildsFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateIcon, CreateMenuItem} from "@leight-core/leight/dist";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.list"}
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
				<Space size={'small'}>
					<ListIcon/>{t('lab.build.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
		</LabMenuDrawerButton> : <Space>
			<BuildCreateButton type={'primary'}/>
		</Space>}
	>
		<BuildsFilterContext>
			<BuildFilter/>
			<BuildTable/>
		</BuildsFilterContext>
	</LabPage>;
});
