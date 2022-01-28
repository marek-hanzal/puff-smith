import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Card, Divider} from "antd";
import {MixtureCreateButton, MixtureListButton, RecentMixtureTable} from "@/puff-smith/site/lab/mixture";
import {ButtonBar, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab')}
	>
		<LabMenu/>
		<Template
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
			span={24}
		>
			<ButtonBar>
				<MixtureCreateButton type={'primary'}/>
				<MixtureListButton size={'middle'}/>
			</ButtonBar>
			<Divider/>
			<Card title={t('lab.mixture.latest.title')} extra={<MixtureListButton size={'small'} icon={undefined} title={'lab.mixture.button.all.list'}/>}>
				<RecentMixtureTable/>
			</Card>
		</Template>
	</LabPage>;
});
