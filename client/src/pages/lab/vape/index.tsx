import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, PlotIcon, VapeIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton size={'middle'}/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<Space size={'small'}>
				<VapeIcon/>{t('lab.vape.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.plot", "/lab/vape/plot", <PlotIcon/>)}
			{CreateMenuItem("lab.vape.button.create", "/lab/vape/create", <CreateIcon/>)}
			{CreateMenuItem("lab.vape.button.list", "/lab/vape/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
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
