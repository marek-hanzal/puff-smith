import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton, VapePlotButton} from "@/puff-smith/site/lab/vape";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {QuickMenu} from "@leight-core/leight/dist";

const VapeButtonBar = () => {
	return <ButtonBar>
		<VapeCreateButton type={'primary'}/>
		<VapeListButton size={'middle'}/>
	</ButtonBar>;
}

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<VapeIcon/>{t('lab.vape.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapePlotButton/>
			</Menu.Item>
		</QuickMenu> : <VapeButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<VapeButtonBar/>
				<Divider/>
			</>}
		>
			<RecentVapeTable/>
		</Template>
		<Divider/>
	</LabPage>;
});
