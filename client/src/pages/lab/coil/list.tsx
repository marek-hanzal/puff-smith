import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilCreateButton, CoilFilter, CoilTable} from "@/puff-smith/site/lab/coil";
import {ButtonLink, HomeIcon, ListIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {isMobile} from "react-device-detect";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil.list"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
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
					href={'/lab/coil'}
					title={'lab.coil.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<ListIcon/>{t('lab.coil.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<CoilCreateButton type={'primary'}/>
		</Space>}
	>
		<CoilsFilterContext>
			<CoilFilter/>
			<CoilTable/>
		</CoilsFilterContext>
	</LabPage>;
});
