import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilCreateButton, CoilTable} from "@/puff-smith/site/lab/coil";
import {QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {ButtonLink, HomeIcon, ListIcon} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

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
		extra={<QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CoilTable/>
	</LabPage>;
});
