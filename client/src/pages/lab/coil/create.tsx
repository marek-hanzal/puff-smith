import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil.create"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/coil'}
					title={'lab.coil.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/coil/list'}
					title={'lab.coil.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.coil.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<CoilListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<CoilListButton/>
		</Space>}
	>
		<CreateTemplate>
			<CreateCoilForm/>
		</CreateTemplate>
	</LabPage>;
});
