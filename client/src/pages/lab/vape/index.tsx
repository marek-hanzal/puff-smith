import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Card} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {ButtonBar} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
	>
		<LabMenu/>
		<Template
			icon={<VapeIcon/>}
			label={'lab.vape'}
			span={24}
		>
			<ButtonBar>
				<VapeCreateButton/>
				<VapeListButton size={'middle'}/>
			</ButtonBar>
			<Card title={t('lab.vape.latest.title')} extra={<VapeListButton size={'small'} icon={undefined} title={'lab.vape.button.all.list'}/>}>
				<RecentVapeTable/>
			</Card>
		</Template>
	</LabPage>;
});
