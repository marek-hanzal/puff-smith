import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Divider} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {ButtonBar, Card, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

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
				<VapeCreateButton type={'primary'}/>
				<VapeListButton size={'middle'}/>
			</ButtonBar>
			<Divider/>
			<Card
				bordered={false}
				title={t('lab.vape.latest.title')}
			>
				<RecentVapeTable/>
			</Card>
		</Template>
		<Divider/>
	</LabPage>;
});
