import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildCreateButton, BuildFilter, BuildTable} from "@/puff-smith/site/lab/build";
import {ButtonLink, HomeIcon, ListIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildsFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {isMobile} from "react-device-detect";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.list"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<BuildCreateButton type={'primary'}/>
		</Space>}
	>
		<BuildsFilterContext>
			<BuildFilter/>
			<BuildTable/>
		</BuildsFilterContext>
	</LabPage>;
});
