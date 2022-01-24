import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Card, Divider, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.vape"}
		selected={['/lab/vape']}
	>
		<LabMenu/>
		<Template
			icon={<VapeIcon/>}
			label={'lab.vape'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<VapeCreateButton/>
						<VapeListButton size={'middle'}/>
					</Space>
					<Divider/>
				</>
			}
			span={24}
		>
			<Card title={t('lab.vape.latest.title')} extra={<VapeListButton size={'small'} icon={undefined} title={'lab.vape.button.all.list'}/>}>
				<RecentVapeTable/>
			</Card>
		</Template>
	</LabPage>;
});
