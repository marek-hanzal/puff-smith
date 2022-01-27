import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Card, Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton, RecentMixtureTable} from "@/puff-smith/site/lab/mixture";
import {Template} from "@leight-core/leight";
import {VapeListButton} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.mixture"}
		selected={['/lab/mixture']}
	>
		<LabMenu/>
		<Template
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<MixtureCreateButton/>
						<MixtureListButton size={'middle'}/>
					</Space>
					<Divider/>
				</>
			}
			span={24}
		>
			<Card title={t('lab.mixture.latest.title')} extra={<VapeListButton size={'small'} icon={undefined} title={'lab.mixture.button.all.list'}/>}>
				<RecentMixtureTable/>
			</Card>
		</Template>
	</LabPage>;
});
