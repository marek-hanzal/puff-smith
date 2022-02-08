import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateVapeForm, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.create"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbButton
				href={'/lab/vape/list'}
				title={'lab.vape.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.vape.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.list", "/lab/vape/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<CreateTemplate>
			<CreateVapeForm/>
		</CreateTemplate>
	</LabPage>;
});
