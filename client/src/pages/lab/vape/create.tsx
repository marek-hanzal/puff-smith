import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, VapeIcon} from "@/puff-smith";
import {CreateVapeForm, VapeListButton} from "@/puff-smith/site/lab/vape";
import {CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.create"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/vape'}
					title={'lab.vape.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/vape/list'}
					title={'lab.vape.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.vape.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapeListButton/>
		</Space>}
	>
		<CreateTemplate
			icon={<VapeIcon/>}
			label={'lab.vape'}
		>
			<CreateVapeForm/>
		</CreateTemplate>
	</LabPage>;
});
