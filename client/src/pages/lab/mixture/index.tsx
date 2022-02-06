import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton, RecentMixtureTable} from "@/puff-smith/site/lab/mixture";
import {ButtonBar, Card, HomeIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture"}
		menuSelection={['/lab/mixture']}
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
					<MixtureIcon/>{t('lab.mixture.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
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
			<Card
				bordered={false}
				title={t('lab.mixture.latest.title')}
			>
				<RecentMixtureTable/>
			</Card>
		</Template>
		<Divider/>
	</LabPage>;
});
