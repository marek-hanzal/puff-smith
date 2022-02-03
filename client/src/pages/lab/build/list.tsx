import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildCreateButton, BuildFilter, BuildTable} from "@/puff-smith/site/lab/build";
import {FilterContextProvider, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {ButtonLink, HomeIcon, ListIcon} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.list"}
		selected={['/lab/build']}
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
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<FilterContextProvider<BuildFilterDto>>
			<BuildFilter/>
			<BuildTable/>
		</FilterContextProvider>
	</LabPage>;
});
