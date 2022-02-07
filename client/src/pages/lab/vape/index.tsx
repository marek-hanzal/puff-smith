import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, PlotIcon, VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {CreateMenuItem} from "@leight-core/leight/dist";

const VapeButtonBar = () => {
	return <ButtonBar>
		<VapeListButton size={'middle'}/>
		<VapeCreateButton type={'primary'}/>
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
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.plot", "/lab/vape/plot", <PlotIcon/>)}
		</LabMenuDrawerButton> : <VapeButtonBar/>}
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
